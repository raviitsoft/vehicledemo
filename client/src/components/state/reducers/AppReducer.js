// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS
import { AuthReducer } from './AuthReducer';
import { QuoteReducer } from './QuoteReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    auth: AuthReducer,
    quote: QuoteReducer
});