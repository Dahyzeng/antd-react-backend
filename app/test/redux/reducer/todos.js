export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todoItems: [...state.todoItems, action.item]
            };
        case 'EDIT_TODO':
            return {
                todoItems: state.todoItems.map((item) => {
                    item.id === action.item.id ? item.text = action.item.text : null;
                    return item
                })
            };
        case 'DELETE_TODO':
            return {
                todoItems: state.todoItems.filter((item) => {
                    return item.id !== action.item.id
                })
            } ;
        case 'COMPLETE_TODO':
            return {
                todoItems: state.todoItems.map((item) => {
                    item.id === action.item.id ? item.complete = action.item.complete : null;
                    return item
                })
            };
        default: return state;
    }
};