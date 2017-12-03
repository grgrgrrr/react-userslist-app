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

    } catch(e){

    }
}

export function* sagas() {
    yield [
        takeLatest('USERS_FETCH_REQUESTED', fetchAllUsers)
    ];
}