import { all, fork } from 'redux-saga/effects';

const sagas = [];

export default function* watchRootSaga() {
  yield all(sagas.map(fork));
}