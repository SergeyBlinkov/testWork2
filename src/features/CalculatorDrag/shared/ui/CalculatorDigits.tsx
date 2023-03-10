import React, { FC } from 'react';
import ButtonDigit from '../../../../shared/ui/ButtonDigit';
import CalculatorWrapper from './CalculatorWrapper';
import { CalculatorDigitInterface } from '../types/UiTypesCalculator';


const CalculatorDigits: FC<CalculatorDigitInterface> = ({ array, id, w, h, cols }) => {

    return (
        <CalculatorWrapper w={w} h={h} cols={cols} id={id}>
            {array.map((numb, index) => {
                const class0 = numb === 0 && 'col-span-2';
                return <ButtonDigit digit={numb} key={index}
                                    specialClass={class0} />;
            })}
        </CalculatorWrapper>
    );
};

export default CalculatorDigits;