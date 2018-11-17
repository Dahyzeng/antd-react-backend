import { PROFILE } from './../common/actions';

const defaultState = {
    isLogin: false
};
const profileReducer = (state = defaultState, action = {}) => {
    switch (action.type) {
        case PROFILE.LOGIN_RESULT:
            return {
                ...state,
                ...action.payload.data,
                isLogin: action.payload.success
            };
        default:
            return state
    }
};

export default profileReducer;