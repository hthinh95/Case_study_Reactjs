import { createStore } from "redux";
import rootReducer from "./Reducer/rootReducer";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import productListSaga from "../Saga/productListSaga";


const sagaMiddleware = createSagaMiddleware()


const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(productListSaga)


export default store