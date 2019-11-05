import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const initState = {}

export default () => {
    return createStore(
        rootReducer,
        initState
    )
}
