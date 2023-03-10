export interface CalculatorStoreType {
    isConstructor: boolean;
    currNumber: string;
    currNumberOver: string;
    mathSymbol: string;
    numberStore: string;
    resultNumber: number | 'На ноль делить нельзя';
}