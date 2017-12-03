import { call, put, takeLatest, select} from "redux-saga/effects";
import * as api from '../api/api';

function* fetchAllUsers(){
    try {
        const { data:response } = yield call(api.fetchUsers);
        yield put({type: 'USERS_FETCH_SUCCEED', payload: response});
    } catch(e){
        yield put({type: 'USERS_FETCH_FAILED'});
    }
}

function* fetchUserAlbums(action){
    try {
        const id = action.payload;
        const { data:response } = yield call(api.fetchUserAlbums, id);
        yield put({type: 'ALBUMS_FETCH_SUCCEED', payload: response});
    } catch(e){
        yield put({type: 'ALBUMS_FETCH_FAILED'});
    }
}


function* fetchAlbumPhotos(action){
    try {
        const id = action.payload;
        const { data:response } = yield call(api.fetchAlbumPhotos, id);
        yield put({type: 'PHOTOS_FETCH_SUCCEED', payload: response});
    } catch(e){
        yield put({type: 'PHOTOS_FETCH_FAILED'});
    }
}

export function* sagas() {
    yield [
        takeLatest('USERS_FETCH_REQUESTED', fetchAllUsers),
        takeLatest('ALBUMS_FETCH_REQUESTED', fetchUserAlbums),
        takeLatest('PHOTOS_FETCH_REQUESTED', fetchAlbumPhotos)
    ];
}