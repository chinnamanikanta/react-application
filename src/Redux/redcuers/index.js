import {combineReducers} from 'redux';
import { productReducer , selectedProductReducer} from './ProductReducer';

const reducers = combineReducers({
    allProdcuts:productReducer,
    product:selectedProductReducer
})

export default reducers
