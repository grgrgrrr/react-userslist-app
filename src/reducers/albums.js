const initialState = [];

export default (state = initialState, action) => {
    switch (action.type){
        case 'ALBUMS_FETCH_SUCCEED':
            return action.payload;
        case 'ALBUMS_CLEAR':
            return initialState;
        default: return state;
    }
}