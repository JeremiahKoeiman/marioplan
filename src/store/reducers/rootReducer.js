import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    auth: authReducer,
    project: projectReducer
});

export default rootReducer
