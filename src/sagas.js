import { all, fork } from 'redux-saga/effects';
import { testSaga } from './sagas/testSaga';
import { channelTestSaga } from './sagas/channelTestSaga';
import { channelListenerSaga } from "./sagas/channelListenerSaga";

const sagas = [
    testSaga,
    channelTestSaga,
    channelListenerSaga
];

export default function* watchRootSaga() {
  yield all(sagas.map(fork));
}