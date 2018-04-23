const defaultState = {profile:{}};

const reducer = (state = defaultState, action = {}) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return Object.assign({}, state, {profile: {isLogin: true}});
        default:
            return state
    }
};

export default reducer;