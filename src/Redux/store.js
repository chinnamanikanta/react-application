import {createStore} from 'redux';
import reducers from './redcuers/index';


const store = createStore(reducers,{})

export default store
