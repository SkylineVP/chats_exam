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
			console.log(state);
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

		case ACTION_TYPES.LOAD_CHAT_MESSAGES_SUCCESS: {
			const {chatId, messages} = action;
			const newState = _.clone(state);
			newState.chats[chatId].messages = messages;
			newState.isFetching = false;
			return newState;
		}


		case ACTION_TYPES.CREATE_CHAT_REQUEST:
			return {
				...state,
				isFetching: true,
			};

		case ACTION_TYPES.CREATE_CHAT_SUCCESS: {
			console.log(action);
			const {_id, ...rest} = action.chat;
			const newState = _.clone(state);
			newState.chats[_id] = {...rest};
			newState.isFetching=false;
			return newState;
		}
		case ACTION_TYPES.CREATE_CHAT_ERROR:
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