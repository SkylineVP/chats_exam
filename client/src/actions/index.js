import ACTION_TYPES from './actionTypes.js';

export const createLoginRequestAction = ( values ) => ({
	type: ACTION_TYPES.LOGIN_REQUEST,
	values,

});
export const createSignUpRequestAction = ( values ) => ({
	type: ACTION_TYPES.SIGN_UP_REQUEST,
	values,

});
export const createAuthSuccessAction = ( user ) => ({
	type: ACTION_TYPES.AUTH_SUCCESS,
	user,
});
export const createAuthErrorAction = ( error ) => ({
	type: ACTION_TYPES.AUTH_ERROR,
	error,
});

export const createSelectChatAction = ( chatId ) => ({
	type: ACTION_TYPES.SELECT_CHAT_ACTION,
	chatId,
});

export const createPostChatRequestAction = ( value ) => ({
	type: ACTION_TYPES.CREATE_CHAT_REQUEST,
	value
});
export const createPostChatSuccess = ( chat ) => ({
	type: ACTION_TYPES.CREATE_CHAT_SUCCESS,
	chat
});
export const createPostChatError = ( error ) => ({
	type: ACTION_TYPES.CREATE_CHAT_ERROR,
	error
});

export const createLoadChatsAction = ( value ) => ({
	type: ACTION_TYPES.LOAD_ALL_CHATS_REQUEST,
	value
});
export const createLoadChatsSuccessAction = ( chats ) => ({
	type: ACTION_TYPES.LOAD_ALL_CHATS_SUCCESS,
	chats
});
export const createLoadChatsErrorAction = ( error ) => ({
	type: ACTION_TYPES.LOAD_ALL_CHATS_ERROR,
	error
});


export const createNewChatMessagesAction = ( chatId, messages ) => ({
	type: ACTION_TYPES.NEW_CHAT_MESSAGES,
	chatId,
	messages,
});
export const createJoinToChatsRequestAction = ( chatId ) => ({
	type: ACTION_TYPES.JOIN_TO_CHATS_REQUEST,
	chatId
});
export const createJoinToChatsSuccessAction = ( data ) => ({
	type: ACTION_TYPES.JOIN_TO_CHATS_SUCCESS,
	data
});
export const createJoinToChatsErrorAction = ( error ) => ({
	type: ACTION_TYPES.JOIN_TO_CHATS_ERROR,
	error
});
export const createAddChatToUser = ( chatId ) => ({
	type: ACTION_TYPES.ADD_CHAT,
	chatId
});


