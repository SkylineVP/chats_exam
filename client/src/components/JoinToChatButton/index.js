import React, { Component }               from 'react';
import { connect }                        from 'react-redux';
import { createJoinToChatsRequestAction } from "../../actions";
import { joinToChat }                     from "../../api/ws/chats";

function mapStateToProps( state ) {
	return {
		...state.chats,
		user: state.auth.user
	};
}

function mapDispatchToProps( dispatch ) {
	return {

		joinToChats: ( chatId ) => dispatch(createJoinToChatsRequestAction(chatId)),

	};
}

class JoinRToChatButton extends Component {
	joinToChatClickHandler = () => {
		debugger;
		this.props.joinToChats(this.props.currentChat);
		joinToChat(this.props.currentChat);
	};

	render() {
		const {user, chats, currentChat} = this.props;
		if (user && chats && currentChat && !chats[currentChat].users.includes(user.id)) {
			return (
				<div onClick={this.joinToChatClickHandler}>
					join to chat
				</div>
			);
		}
		else {
			return null
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(JoinRToChatButton);