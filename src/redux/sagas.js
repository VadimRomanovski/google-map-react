import { FETCHED_COORDS, REQUEST_COORDS} from './type';
import { takeEvery, put, call, all } from 'redux-saga/effects';

function* requestCoordsWatcher() {
    yield takeEvery(REQUEST_COORDS, requestCoords);
}

function* requestCoords({ payload }) {
    const response = yield call(() => {
        return fetch(`http://localhost:5000/fetchCoords?polygon=${payload}`).then(res => res.json())
    })
    console.log(response)
    yield put({ type: FETCHED_COORDS, response })
}

export default function* rootSagas() {
    yield all([requestCoordsWatcher()]);
}
