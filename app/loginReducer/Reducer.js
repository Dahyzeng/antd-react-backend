import { PROFILE } from './../common/actions';
const defaultState = {profile:{}};

const reducer = (state = defaultState, action = {}) => {
    switch (action.type) {
        case PROFILE.LOGIN_ACTION:
            return Object.assign({}, state, {profile: {isLogin: true}});
        default:
            return state
    }
};

export default reducer;