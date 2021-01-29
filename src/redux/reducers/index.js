import {combineReducers} from 'redux';
import persons from './persons';

const rootReducer = combineReducers({
    persons: persons
})

export default rootReducer;