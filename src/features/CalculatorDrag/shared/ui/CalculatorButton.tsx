import React, { FC } from 'react';
import CalculatorWrapper from './CalculatorWrapper';

import { useAppDispatch } from '../../store/store';
import { getResult } from '../../store/CalculatorRedux';
import { CalculatorButtonInterface } from '../types/UiTypesCalculator';

const CalculatorButton: FC<CalculatorButtonInterface> = ({ id }) => {
    const dispatch = useAppDispatch();
    const handleClick = () => dispatch(getResult());

    return (
        <CalculatorWrapper h={'72px'} id={id}>
            <button onClick={handleClick}
                    className={'flex items-center justify-center bg-[#5D5FEF] h-[100%] rounded-md'}>=
            </button>
        </CalculatorWrapper>
    );
};

export default CalculatorButton;