import { PROFILE } from './../common/actions';
const defaultState = {profile:{}};

const reducer = (state = defaultState, action = {}) => {

    switch (action.type) {
        case PROFILE.LOGIN_RESULT:
            return {
                ...state,
                profile: {
                    ...action.payload.data,
                    isLogin: action.payload.success
                }
            };
        default:
            return state
    }
};

export default reducer;