import {combineReducers} from 'redux'

const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            if (!state[action.postId]){
                return {...state, [action.postId]: [action.comment]};
            } else {
                return {...state, [action.postId]: [...state[action.postId], action.comment]};
            }
            
        default:
            return state;
    }
};

const postsReducer = (state = [], action) => {

    switch (action.type) {
        case 'LOAD_POST':
            return [...action.posts]        
        case 'REMOVE_POST':
            const posts=state.filter(post => post._id !== action.id)
            return [...posts];
        case 'ADD_POST':
            return [...state, action.post];
        default:
            return [...state];
    }
};

const rootReducer = combineReducers({
    postsReducer,
    commentsReducer
});

export default rootReducer;