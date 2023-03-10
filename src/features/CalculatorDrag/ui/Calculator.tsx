import React, { useEffect } from 'react';
import '../style/Calculator.css';
import CalculatorButtonBlock from '../shared/ui/CalculatorButtonBlock';
import CalculatorResult from '../shared/ui/CalculatorResult';
import CalculatorDigits from '../shared/ui/CalculatorDigits';
import { digits, mathState } from '../../../shared/data/dataVariables';
import CalculatorButton from '../shared/ui/CalculatorButton';
import { EmptyText } from '../../../shared/ui/EmptyText';
import { handleDragEnd, handleDragOver, handleDragStart, handleDrop } from '../helper/dragEvent';
import { useAppSelector } from '../store/store';
import { CalculateResult } from '../helper/calculateResult';


const Calculator = () => {

    const {
        isConstructor,
    } = useAppSelector(state => state.calculatorState);

    useEffect(() => {
        const constructorField = document.getElementById('constructorField');
        const constructorTemplate = document.getElementById('constructorTemplate');
        const digit = document.getElementById('digit');
        const digitMath = document.getElementById('digitMath');
        const result = document.getElementById('result');
        const button = document.getElementById('button');
        const ids = [digit, digitMath, result, button];
        constructorField?.childNodes.forEach((item) => {
            const element = item as HTMLElement;
            if (isConstructor) {
                element.style.cursor = 'move';
                element.draggable = true;
            } else {
                element.draggable = false;
                element.style.cursor = 'auto';
            }
        });
        constructorTemplate?.childNodes.forEach((item) => {
            const element = item as HTMLElement;
            if (isConstructor) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });

        ids.forEach(target => {
            target?.addEventListener('dragstart', handleDragStart);
            target?.addEventListener('dragend', handleDragEnd);
        });
        constructorField?.addEventListener('dragover', handleDragOver);
        constructorField?.addEventListener('drop', handleDrop);
        return () => {
            ids.forEach(target => {
                target?.removeEventListener('dragstart', handleDragStart);
                target?.removeEventListener('dragend', handleDragEnd);
            });
            constructorField?.removeEventListener('dragover', handleDragOver);
            constructorField?.removeEventListener('drop', handleDrop);
        };
    }, [isConstructor]);

    const result = CalculateResult();

    return (
        <div className='grid relative gap-6 grid-cols-2 justify-center mt-12' id={'MainField'}>
            <section className={'col-start-2'}>
                <CalculatorButtonBlock />
            </section>
            <section id={'constructorTemplate'} className='flex gap-4 row-start-2 flex-col justify-self-end'>
                <CalculatorResult id={'result'} result={result} />
                <CalculatorDigits
                    array={mathState}
                    h={'56px'}
                    cols={'grid-cols-4'}
                    id={'digitMath'}
                />

                <CalculatorDigits id={'digit'} array={digits} cols={'grid-cols-3'} />
                <CalculatorButton id={'button'} />
            </section>
            <section
                id={'constructorField'}
                className={`w-[255px] p-2 h-[460px] gap-2 flex-col rounded-md ${isConstructor && 'border-2 border-dashed'} flex items-center relative`}>
                <EmptyText />
            </section>
        </div>
    );
};


export default Calculator;