import { takeLatest }            from 'redux-saga/effects';
import ACTION_TYPES              from '../actions/actionTypes.js';
import { loginSaga, signUpSaga }     from './authSaga.js';
import { createChatSaga, loadChats } from "./ChatSaga";

export default function * () {
  yield takeLatest(ACTION_TYPES.LOGIN_REQUEST, loginSaga);
  yield takeLatest(ACTION_TYPES.SIGN_UP_REQUEST, signUpSaga);
  yield takeLatest(ACTION_TYPES.CREATE_CHAT_REQUEST,createChatSaga);
  yield takeLatest(ACTION_TYPES.LOAD_ALL_CHATS_REQUEST,loadChats)
}