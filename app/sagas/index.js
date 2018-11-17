import { all, fork } from 'redux-saga/effects'
import profileSaga from './profile';
import admin from './admin';

export default function* root() {
    yield all([
        fork(profileSaga),
        fork(admin)
    ])
}