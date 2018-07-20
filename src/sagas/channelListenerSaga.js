import { takeEvery, call } from 'redux-saga/effects';

export const channelListenerSaga = function* () {
    yield takeEvery('CHANNEL_EMMIT', onChannelEmmit);
};

export const onChannelEmmit = function* (action) {
    yield call(console.log, action.payload);
};