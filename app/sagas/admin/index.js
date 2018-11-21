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

function * addAdmin(action) {
    const result = yield call(service.admin.addAdmin, action.params);
    if (result.success) {
        let queryResult = yield call(service.admin.queryList, {});
        let id = queryResult.data.length + 1;
        yield put({
            type: ADMIN.QUERY_LIST_RESULT_ACTION,
            payload: [
                ...queryResult.data,
                {
                    ...action.params,
                    id,
                    userStatus: 0
                }
            ]
        })
    }
    if (action.callback) {
        action.callback(result)
    }
}

export default function * adminSaga() {
    while(true) {
        const action = yield take('*');
        switch (action.type) {
            case ADMIN.QUERY_LIST_ACTION:
                yield fork(queryList, action);
                break;
            case ADMIN.ADD_ADMIN_ACTION:
                yield fork(addAdmin, action);
        }

    }
}