import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {createFirestoreInstance, getFirestore, reduxFirestore} from "redux-firestore";
import {ReactReduxFirebaseProvider, getFirebase} from "react-redux-firebase";
import firebase from "firebase/app";

// eslint-disable-next-line
import fbConfig from './config/fbConfig' // --> if you remove this, it won't work
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./store/reducers/rootReducer";

firebase.firestore();

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

const middleware = [
    thunk.withExtraArgument({ getFirestore }),
    thunk.withExtraArgument({ getFirebase })
]


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        reduxFirestore(firebase)
    ),
);

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

// Auth state promise resolver.
// https://github.com/prescottprue/react-redux-firebase/issues/264
let authReadyPromiseResolver;
const authReadyPromise = new Promise(resolve => {
    authReadyPromiseResolver = resolve
})

const unsubscribe = firebase.auth().onAuthStateChanged(() => {
    authReadyPromiseResolver();
    unsubscribe();
})

authReadyPromise.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App />
            </ReactReduxFirebaseProvider>
        </Provider>,
        document.getElementById('root')
    );
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

