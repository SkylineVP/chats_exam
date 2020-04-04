import ACTION_TYPES from '../actions/actionTypes.js';
import _            from 'lodash';

const initialState = {
	chats: {},
	currentChat: null,
	isFetching: false,
};

function chatsReducer( state = initialState, action ) {

	switch (action.type) {

		case ACTION_TYPES.SELECT_CHAT_ACTION:
			return {
				...state,
				currentChat: action.chatId,
			};

		case ACTION_TYPES.LOAD_ALL_CHATS_REQUEST:
			return {
				...state,
				isFetching: true
			};

		case ACTION_TYPES.LOAD_ALL_CHATS_SUCCESS: {

			const {chats} = action;
			const newState = _.clone(state);
			chats.forEach(chat => {
				newState.chats[chat._id] = chat;
				delete newState.chats[chat._id]._id;
				newState.isFetching=false;
				return newState;
			});
		}

		case ACTION_TYPES.LOAD_ALL_CHATS_ERROR:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};

		case ACTION_TYPES.NEW_CHAT_MESSAGES: {
			const {chatId, messages} = action;
			const newState = _.clone(state);
			newState.chats[chatId].messages.push(messages);
			newState.isFetching = false;
			return newState;
		}


		case ACTION_TYPES.CREATE_CHAT_REQUEST:
			return {
				...state,
				isFetching: true,
			};

		case ACTION_TYPES.CREATE_CHAT_SUCCESS: {

			const {_id, ...rest} = action.chat;
			const newState = _.clone(state);
			newState.chats[_id] = {...rest};
			newState.isFetching = false;
			return newState;
		}
		case ACTION_TYPES.CREATE_CHAT_ERROR:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};

		case ACTION_TYPES.JOIN_TO_CHATS_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case ACTION_TYPES.JOIN_TO_CHATS_SUCCESS: {
			const {chatId, authorization} = action.data;
			const newState = _.clone(state);
			debugger;
			newState.chats[chatId].users.push(authorization);
			newState.isFetching = false;
			return newState
		}
		case ACTION_TYPES.JOIN_TO_CHATS_ERROR:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}

}

export default chatsReducer;