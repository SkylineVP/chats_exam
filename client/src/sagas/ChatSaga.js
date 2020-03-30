import { put }                                        from 'redux-saga/effects';
import { getChats, createChat }                                                            from "../api/http/ChatController";
import {
	createLoadChatMessagesSuccessAction, createLoadChatsErrorAction,
	createLoadChatsSuccessAction,
	createPostChatError,
	createPostChatSuccess
} from "../actions";

export function* createChatSaga( value ) {
	try {
		const {data} = yield createChat(value.value);
		console.log(data);
		yield put(createPostChatSuccess(data))
	} catch (e) {
		yield put(createPostChatError(e.response));
	}
}
export function *loadChats() {
	try {
		const {data}=yield getChats();
		yield put(createLoadChatsSuccessAction(data));
	}catch (e) {
		yield put(createLoadChatsErrorAction(e.response));
	}
}

