import React, { FC } from 'react';
import { ButtonDigitInterface } from '../types/UITypes';
import '../style/keyframesStyle.css';
import { useAppDispatch } from '../../features/CalculatorDrag/store/store';
import { addCurrNumber, addMathSymbol } from '../../features/CalculatorDrag/store/CalculatorRedux';
import { mathState } from '../data/dataVariables';

const ButtonDigit: FC<ButtonDigitInterface> = ({ digit, specialClass }) => {
    const dispatch = useAppDispatch();
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLElement;
        console.log(digit);
        target.classList.add('isGlow');
        setTimeout(() => {
            target.classList.remove('isGlow');
        }, 400);
        const isMath = mathState.filter((value) => value === digit).length > 0;
        if (isMath) {
            return dispatch(addMathSymbol(digit.toString()));
        } else return dispatch(addCurrNumber(digit.toString()));
    };
    return (
        <button
            onClick={handleClick}
            className={` ${specialClass} h-[100%] flex items-center justify-center border rounded-xl`}>
            {digit}
        </button>

    );
};

export default ButtonDigit;