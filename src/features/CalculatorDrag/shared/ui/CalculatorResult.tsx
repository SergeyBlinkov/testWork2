import React, { FC } from 'react';
import CalculatorWrapper from './CalculatorWrapper';
import { CalculatorResultInterface } from '../types/UiTypesCalculator';


const CalculatorResult: FC<CalculatorResultInterface> = ({ id, result }) => {
    const checker = result === 'На ноль делить нельзя';
    return (
        <CalculatorWrapper id={id} h={'60px'}>
            <span
                className={`rounded-md justify-end pr-2 w-[100%] ${checker ? 'text-[20px]' : 'text-[36px]'} h-[100%] flex items-center right-full bg-[#F3F4F6]`}
                style={{ textAlign: 'right' }}>{result}</span>
        </CalculatorWrapper>
    );
};

export default CalculatorResult;