import { put }                              from 'redux-saga/effects';
import { getChats, createChat, joinToChat } from "../api/http/ChatController";
import {
	createLoadChatsErrorAction,
	createLoadChatsSuccessAction,
	createPostChatError,
	createPostChatSuccess, createJoinToChatsSuccessAction, createJoinToChatsErrorAction, createAddChatToUser
}                                           from "../actions";

export function* createChatSaga( value ) {
	try {
		const {data} = yield createChat(value.value);

		yield put(createPostChatSuccess(data))
	} catch (e) {
		yield put(createPostChatError(e.response));
	}
}

export function* loadChats() {
	try {
		const {data} = yield getChats();
		yield put(createLoadChatsSuccessAction(data));
	} catch (e) {
		yield put(createLoadChatsErrorAction(e.response));
	}
}

export function* joinToChatSaga( value ) {
	try {

		const {data} = yield  joinToChat(value.chatId);
		debugger;
		yield put(createJoinToChatsSuccessAction(data));
		yield put(createAddChatToUser(value.chatId));
	} catch (e) {
		yield put(createJoinToChatsErrorAction(e));
	}

}

