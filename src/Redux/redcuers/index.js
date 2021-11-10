import {combineReducers} from 'redux';
import { productReducer } from './ProductReducer';

const reducers = combineReducers({
    allProdcuts:productReducer
})

export default reducers
