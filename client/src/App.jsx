import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import HomePage from './pages/Home/HomePage';

const App = () => {
    return (
        <Provider store={store}>
            <HomePage />
        </Provider>
    );
};

export default App;
