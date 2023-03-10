export const numberConvert = (number: string) => {
    //   1238957897 624098
    let numberAfter = number.slice(9);
    console.log(numberAfter);
    const splitter = number.split('');
    const splitBefore = splitter.slice(0, 9).join('');
    const changer = splitter.slice(9);
    const firstEl = changer.slice(0, 1);
    const lastEl = changer.slice(1).join('');
    const lastNumber = firstEl + '.' + lastEl;
    const result = Math.round(+lastNumber);
    if (splitter.length > 9) {
        console.log(result);
        return splitBefore + result;
    } else return number;
};