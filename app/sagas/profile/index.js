import { put, take, call, fork } from 'redux-saga/effects'
import { PROFILE } from './../../common/actions';
import service from './../../service';

function* login(action) {
    const result = yield call(service.profile.login, action.payload);
    yield put({ type: PROFILE.LOGIN_RESULT, payload: result});
    if (action.callback) {
        action.callback(result);
    }
}

export default function* profileSaga () {
    while(true) {
        const action = yield take(PROFILE.LOGIN_ACTION);
        yield fork(login, action);
    }
}