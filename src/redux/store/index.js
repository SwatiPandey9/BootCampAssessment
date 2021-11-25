import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
// import CounterReducer from "../reducers/CounterReducer";
import combinedReducers from "../reducers";

const enhance = compose(applyMiddleware(thunk))
const store = createStore(combinedReducers)
    
export default store;