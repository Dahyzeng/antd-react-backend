import { put, take, all, fork } from 'redux-saga/effects'
import { PROFILE } from './../../common/actions';

function* login() {
    while(true) {
        const { payload, callback } = yield take(PROFILE.LOGIN_ACTION);
        setTimeout(() => {
            put({type: PROFILE.LOGIN_ACTION, payload: payload});
            if (callback) {
                callback();
            }
        }, 200)
    }
}

export default function* profileSaga () {
    yield all([
        fork(login)
    ])
}