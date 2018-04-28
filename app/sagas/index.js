import { all, fork } from 'redux-saga/effects'
import profileSaga from './profile'

export default function* root() {
    yield all([
        fork(profileSaga)
    ])
}