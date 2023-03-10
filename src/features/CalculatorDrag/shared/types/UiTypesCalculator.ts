export interface CalculatorWrapperInterface {
    children: JSX.Element | string | JSX.Element[];
    w?: string;
    h?: string;
    cols?: string;
    id?: string;
}

export interface CalculatorDigitInterface {
    array: Array<number | string>;
    w?: string;
    h?: string;
    cols?: string;
    id?: string;
}

export interface CalculatorResultInterface {
    id?: string;
    result: string;
}

export interface CalculatorButtonInterface {
    id?: string;
}