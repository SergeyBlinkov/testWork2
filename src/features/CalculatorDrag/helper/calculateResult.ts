import { useAppSelector } from '../store/store';

export const CalculateResult = () => {
    const { currNumber, mathSymbol, resultNumber, numberStore } = useAppSelector(state => state.calculatorState);
    const currLength = currNumber.length;
    const mathLength = mathSymbol.length > 0;
    const resultExp = resultNumber > 0 || resultNumber < 0 || resultNumber === 'На ноль делить нельзя';
    const numberStoreExp = numberStore.length > 0;
    let result = '0';
    if (currLength === 0 && resultExp) {
        return resultNumber.toString();
    }
    if (mathLength && numberStoreExp) {
        if (currLength === 0) {
            return mathSymbol;
        } else
            return currNumber;
    }
    if (currLength > 0) {

        if (mathLength) {
            return mathSymbol;
        }
        return currNumber;
    } else return result;
};