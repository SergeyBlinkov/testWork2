import { Provider } from 'react-redux';
import { store } from './store/store';
import Calculator from './ui/Calculator';

const CalculatorIndex = () => {
    return <Provider store={store}>
        <Calculator />
    </Provider>;
};

export default CalculatorIndex;