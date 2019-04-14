// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS
import { AuthReducer } from './AuthReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    auth: AuthReducer
});