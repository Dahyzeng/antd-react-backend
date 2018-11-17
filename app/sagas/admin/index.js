import { call, put, take, fork } from 'redux-saga/effects';
import { ADMIN } from './../../common/actions';
import service from './../../service';
function * queryList(action) {
    const result = yield call(service.admin.queryList, action.params);
    if (result.success) {
        yield put({
            type: ADMIN.QUERY_LIST_RESULT_ACTION,
            payload: result.data
        })
    }
}

export default function * adminSaga() {
    while(true) {
        const action = yield take(ADMIN.QUERY_LIST_ACTION);
        yield fork(queryList, action)
    }
}