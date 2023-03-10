import { createSlice } from '@reduxjs/toolkit';
import { CalculatorStoreType } from '../types/StoreType';
import { MathSymbolHelper } from '../helper/MathSymbolHelper';
import { numberConvert } from '../helper/numberConvert';

const initialState: CalculatorStoreType = {
    isConstructor: true,
    mathSymbol: '',
    currNumber: '',
    currNumberOver: '',
    numberStore: '',
    resultNumber: 0,
};

const CalculatorReduxSlice = createSlice({
    name: 'calculatorRedux',
    initialState,
    reducers: {
        changeBoolean: (state, action) => {
            state.isConstructor = action.payload;
        },
        addMathSymbol: (state, action) => {
            const ap: string = action.payload;
            const resultChecker = state.resultNumber > 0 || state.resultNumber < 0;
            if (resultChecker && state.mathSymbol.length === 0) {
                state.numberStore = numberConvert(state.resultNumber.toString());
                state.resultNumber = 0;
                state.mathSymbol = ap;
                return;
            }
            if (state.mathSymbol.length > 0) {
                if (state.currNumber.length === 0) {
                    state.mathSymbol = ap;
                    return;
                } else if (state.currNumber === '0' && state.mathSymbol === '/') {
                    state.numberStore = '';
                    state.currNumber = '';
                    state.mathSymbol = '';
                    state.resultNumber = 'На ноль делить нельзя';
                    return;
                } else {
                    const data = {
                        a: state.numberStore,
                        b: state.currNumber,
                        symbol: state.mathSymbol[0],
                    };
                    const result = MathSymbolHelper(data);
                    state.resultNumber = +numberConvert(result.toString());
                    state.currNumber = '';
                    state.mathSymbol = ap;
                    state.numberStore = numberConvert(result.toString());
                }


            }
            state.mathSymbol = ap;
            state.numberStore = state.currNumber.length > 0 ? numberConvert(state.currNumber) : numberConvert(state.resultNumber.toString());
            state.currNumber = '';

        },
        addCurrNumber: (state, action) => {
            const ap: string = action.payload;
            if (state.resultNumber === 'На ноль делить нельзя') {
                state.resultNumber = 0;
            }
            if (state.currNumber.length > 9) {
                state.currNumberOver = state.currNumberOver + ap;
                state.currNumber = numberConvert(state.currNumber + state.currNumberOver);
                return;
            } else {
                state.currNumber = state.currNumber + ap;
            }
        },
        getResult: (state) => {
            const data = {
                a: state.numberStore,
                b: state.currNumber,
                symbol: state.mathSymbol,
            };
            if (state.mathSymbol === '/' && state.currNumber === '0') {
                state.resultNumber = 'На ноль делить нельзя';
            } else {
                const result = MathSymbolHelper(data);
                state.resultNumber = +numberConvert(result.toString());
            }
            state.currNumber = '';
            state.mathSymbol = '';
            state.numberStore = '';
        },
    },
});
export const { changeBoolean, addCurrNumber, addMathSymbol, getResult } = CalculatorReduxSlice.actions;
export default CalculatorReduxSlice.reducer;