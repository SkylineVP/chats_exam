import React, { useEffect, useState }  from 'react';
import { connect }                     from 'react-redux';
import _                               from 'lodash'
import JoinRToChatButton               from "../JoinToChatButton";
import SendMessageForm                 from "../forms/SendMessageForm";
import { joinToChats }                 from "../../api/ws/chats";
import { chatSocket }                  from "../../api/ws";
import { createNewChatMessagesAction } from "../../actions";

class MessagesList extends React.Component {

	componentDidMount() {
		debugger;
		joinToChats(this.props.user);
		chatSocket.on('new-message', ( chatId, message ) => {
			debugger;
			this.props.newMessage(chatId, message);
			this.forceUpdate();//почему-то без фоса не работает
		});
	}

	render() {
		const {currentChat, chats, className} = this.props;

		let messagesElem;
		if (currentChat && !_.isEmpty(chats[currentChat].messages)) {
			messagesElem = chats[currentChat].messages.map(( message ) => {
					return (
						<li key={message._id}>
							<div>{message.authorId}</div>
							<div>{message.body}</div>
						</li>)
				}
			)
		}
		else {
			messagesElem = <li>empty Chat</li>
		}
		return (
			<ul className={className}>
				{
					this.props.currentChat
					? messagesElem
					: (<li>Select chat</li>)
				}
				<SendMessageForm/>
				<JoinRToChatButton/>
			</ul>

		);
	};
}

const mapStateToProps = state => {

	return {
		currentChat: state.chats.currentChat,
		chats: state.chats.chats,
		user: state.auth.user
	};

};
const mapDispatchToProps = dispatch => {
	return {
		newMessage: ( chatId, message ) => dispatch(createNewChatMessagesAction(chatId, message))
	}

};
export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);