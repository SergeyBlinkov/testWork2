import { GetNextElementType } from '../types/helperType';

export const getNextElement = ({ cursorPosition, currentElement }: GetNextElementType) => {
    const classList = currentElement.classList.contains('calculatorWrapper');
    const { y, height } = currentElement.getBoundingClientRect();
    const center = y + (height / 2);
    return classList && (cursorPosition < center);
};