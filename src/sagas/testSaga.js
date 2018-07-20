import { takeEvery, call, apply } from 'redux-saga/effects';

export function* testSaga(){
    console.log('testSaga started');
    yield takeEvery('TEST', onTestActionDispatched);
}

export function* onTestActionDispatched(){
    let resp = yield call(fetch, 'http://httpbin.org/ip');
    const data = yield apply(resp, resp.json);
    console.log('resp: ', data);
}
