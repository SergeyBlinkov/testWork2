import { toPeriod } from './toPeriod';
import { MathSymbolHelperType } from '../types/helperType';

export const MathSymbolHelper = ({ a, b, symbol }: MathSymbolHelperType): number => {
    const firstNum = toPeriod(a);
    const secondNumb = toPeriod(b);
    if (b === '0') return 0;
    if (symbol === '-') return firstNum - secondNumb;
    if (symbol === '+') return firstNum + secondNumb;
    if (symbol === '*') return firstNum * secondNumb;
    if (symbol === '/') return firstNum / secondNumb;
    else return 0;
};

