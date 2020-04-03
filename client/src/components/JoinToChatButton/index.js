import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { joinToChat }       from "../../api/http/ChatController";

function mapStateToProps( state ) {
	return {
		chats: state.chats,
		user: state.auth.user
	};
}

class JoinRToChatButton extends Component {
	joinToChatClickHandler = () => {
		joinToChat(this.props.currentChat);
	};

	render() {
		const {user, chats: {chats, currentChat}} = this.props;
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
)(JoinRToChatButton);