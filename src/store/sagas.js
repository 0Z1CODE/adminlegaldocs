import { all } from 'redux-saga/effects'

//public
import MainSaga from './main/saga';
import UserSaga from './user/saga';

export default function* rootSaga() {
    yield all([
        
        //public
        MainSaga(),
        UserSaga()
    ])
}