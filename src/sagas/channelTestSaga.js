import { eventChannel } from 'redux-saga';
import { call, take, put, race } from 'redux-saga/effects';

let channel;

export function* channelTestSaga() {
    while (true) {
        yield take('START');
        yield race({
            task: call(connect),
            cancel: take('STOP')
        })
    }
}

export function webSocketInitChannel  () {
    return new eventChannel(emit => {
        const ws = new WebSocket('ws://wgt-srv0.finversia.ru/WSS/Server.ashx?subscriber=true');
        ws.onmessage = e => {
            const payload = JSON.parse(e.data);
            emit({type: 'CHANNEL_EMMIT', payload: payload});
        };
        return () => {
            ws && ws.close();
        };
    });
}

export function* connect() {
    channel = yield call(webSocketInitChannel);
    while (channel) {
        const action = yield take(channel);
        yield put(action)
    }
}
