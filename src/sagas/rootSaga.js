import { call, put, takeLatest, select} from "redux-saga/effects";
import * as api from '../api/api';

function* fetchAllUsers(){
    try {
        const { data:response } = yield call(api.fetchUsers);
        yield put({type: 'USERS_FETCH_SUCCEED', payload: response});
    } catch(e){
        console.log(e);
    }
}

export function* sagas() {
    yield [
        takeLatest('USERS_FETCH_REQUESTED', fetchAllUsers)
    ];
}