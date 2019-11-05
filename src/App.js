import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import createReduxStore from "./store/createReduxStore";
import fbConfig from './config/fbConfig'

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import * as firebase from "firebase";

const store = createReduxStore()

function App() {
    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider firebase={firebase} config={fbConfig} dispatch={store.dispatch}>
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
