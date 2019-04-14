// IMPORT PACKAGES
import React from 'react';
import { Provider } from 'react-redux';

// IMPORT STORE
import { createAppStore } from '../components/state/stores/AppStore';

// IMPORT COMPONENTS
import AppRouter from './routers/AppRouter';

export const App = () => (
    <Provider store={createAppStore()}>
        <div className="container-fluid">
            <AppRouter />
        </div> 
    </Provider>     
);