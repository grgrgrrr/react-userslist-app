const initialState = [];

export default (state = initialState, action) => {
    switch (action.type){
        case 'USERS_FETCH_SUCCEED':
            return action.payload;
        default: return state;
    }
}