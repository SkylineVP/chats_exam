import ACTION_TYPES from '../actions/actionTypes.js';
import _            from "lodash";

const initialState = {
  user: null,
  error: null,
  isFetching: false,
};

function authReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SIGN_UP_REQUEST:
    case ACTION_TYPES.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTION_TYPES.AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user,
      };
    case ACTION_TYPES.AUTH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case ACTION_TYPES.ADD_CHAT: {
      debugger;
      const {chatId} = action;
      const newState = _.clone(state);
      newState.auth.user.chats.push(chatId);
      return newState;
    }

    default:
      return state;
  }
}

export default authReducer;
