import {combineReducers} from "redux";
import productListReducer from "./productListReducer";
import giohangReducer from "./giohangReducer";


const rootReducer = combineReducers({
    productListReducer,
    giohangReducer
})

export default rootReducer