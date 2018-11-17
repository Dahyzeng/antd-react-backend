import { ADMIN } from './../common/actions';
const defaultState = {
    adminList: []
};
const adminReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADMIN.QUERY_LIST_RESULT_ACTION:
            return {
                ...state,
                adminList: action.payload
            };
        default:return state;
    }
};

export default adminReducer;