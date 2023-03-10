import React, { FC } from 'react';

import { useAppSelector } from '../../store/store';
import { CalculatorWrapperInterface } from '../types/UiTypesCalculator';

const CalculatorWrapper: FC<CalculatorWrapperInterface> = ({ children, id, cols, w, h }) => {
    const { isConstructor } = useAppSelector(state => state.calculatorState);
    let width = w ? w : '244px';
    let height = h ? h : '224px';
    return (
        <div id={id} className={`calculatorWrapper`}
             draggable={true}>
            <div
                className={`${isConstructor && 'pointer-events-none'} grid bg-white ${cols} cursor-pointer gap-2 p-1 shadow items-center rounded-md`}
                style={{ width, height }}>
                {children}
            </div>
        </div>

    );
};

export default CalculatorWrapper;