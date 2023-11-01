import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

async function fetchList() {
    try {
       const res = await axios.get('http://localhost:3001/lists')
       return res.data
    }
    catch (e) {
       return e.message
    }
 }

function* productListSaga() {
    yield takeLatest("GET_LIST_API_REQUESTED", productListSagaWorker);
 }

 function* productListSagaWorker(action) {
    try {
       const lists = yield call(fetchList);
       yield put({ type: "GET_LIST_API_SUCCEEDED", payload: { lists } });
    } catch (e) {
       yield put({ type: "GET_LIST_API_FAILED", e });
    }
 }

 export default productListSaga