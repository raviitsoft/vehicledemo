// IMPORT PACKAGE REFERENCES

import { createStore, applyMiddleware, compose } from 'redux';
// IMPORT MIDDLEWARE

import { default as ReduxThunk } from 'redux-thunk';
// import {  default as promiseMiddleware } from 'redux-promise-middleware';

// IMPORT REDUCERS

import { AppReducer } from '../reducers/AppReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// CONFIGURE STORE

export const createAppStore = () => {
    return createStore(
        AppReducer,
        composeEnhancers(
            applyMiddleware(
                ReduxThunk
            )
        )
    );
};