const defaultState = {};

const reducer = (state = defaultState, action = {}) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return Object.assign({}, state, { success: true });
        default:
            return state
    }
};

export default reducer;