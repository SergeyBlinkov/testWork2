import React from 'react';
import RuntimePicture from '../../../../assets/RuntimePicture.svg';
import ArrowPicture from '../../../../assets/ArrowPicture.svg';
import '../style/CalculatorButtonBlock.css';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { changeBoolean } from '../../store/CalculatorRedux';

const CalculatorButtonBlock = () => {
    const { isConstructor } = useAppSelector(state => state.calculatorState);
    const dispatch = useAppDispatch();
    return (
        <div
            className={'w-[243px] h-[38px] p-1 relative rounded-[6px] bg-[#F3F4F6] grid grid-cols-2 justify-center items-center'}>
            <section
                onClick={() => dispatch(changeBoolean(false))}
                className={`w-auto flex gap-2 justify-center cursor-pointer items-center ${!isConstructor && 'active'}`}>
                <img src={RuntimePicture} alt={'runtime'} />
                <span>Runtime</span></section>
            <section
                onClick={() => dispatch(changeBoolean(true))}
                className={`w-auto flex gap-2 cursor-pointer justify-center items-center ${isConstructor && 'active'}`}>
                <img src={ArrowPicture} alt={'arrow'} />
                <span>Constructor</span></section>
        </div>
    );
};

export default CalculatorButtonBlock;