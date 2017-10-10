import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    );
    return store;
}