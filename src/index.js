import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './contexts/FirebaseContext';
import { firebase } from './libs/firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase }}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);