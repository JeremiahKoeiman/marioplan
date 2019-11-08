import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {createFirestoreInstance, getFirestore, reduxFirestore} from "redux-firestore";
import {ReactReduxFirebaseProvider, getFirebase} from "react-redux-firebase";
import firebase from "firebase/app";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
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
    thunk.withExtraArgument({ getFirebase }),
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


function App() {
    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <Router>
                    <div className="App">
                        <Navbar/>
                        <Switch>
                            <Route exact path='/' component={Dashboard}/>
                            <Route path='/project/:id' component={ProjectDetails}/>
                            <Route path='/signin' component={SignIn}/>
                            <Route path='/signup' component={SignUp}/>
                            <Route path='/create' component={CreateProject}/>
                        </Switch>
                    </div>
                </Router>
            </ReactReduxFirebaseProvider>
        </Provider>
    );
}

export default App;
