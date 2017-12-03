const initialState = [];

export default (state = initialState, action) => {
    switch (action.type){
        case 'PHOTOS_FETCH_SUCCEED':
            return action.payload;
        case 'PHOTOS_CLEAR':
            return initialState;
        default: return state;
    }
}