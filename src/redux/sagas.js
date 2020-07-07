import { FETCH_COORDS, REQUEST_COORDS} from './type';
import { takeEvery, put, call } from 'redux-saga/effects';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_COORDS, sagaWorker);
}

function* sagaWorker() {
    const payload = yield call(fetchCoords)
    yield put({ type: FETCH_COORDS, payload })
}

async function fetchCoords() {
    const response = await fetch(`http://localhost:5000/`)
    return await response.json()
}
