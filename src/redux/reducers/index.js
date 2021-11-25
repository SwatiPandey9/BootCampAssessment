import { combineReducers} from "redux"
import CounterReducer from './CounterReducer'
import ProductDetailsReducer from "./ProductDetailsReducer"
import TodoReducer from "./TodoReducer"

const combinedReducers = combineReducers(
    {
        counterValue : CounterReducer,
        productDetail : ProductDetailsReducer,
        Todo: TodoReducer,
    }
)
export default combinedReducers;