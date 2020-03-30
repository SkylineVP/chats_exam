import React, { Component } from 'react';
import { connect }          from 'react-redux';
import {
	createSelectChatAction,
	createLoadChatsAction,
	createPostChatRequestAction
}                           from "../../actions";

function mapStateToProps( state ) {
	return {
		chats: state.chats,
		isFetching: state.isFetching,
		user: state.auth.user,
		currentChat: state.chats.currentChat
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		selectChat: ( chatId ) => dispatch(createSelectChatAction(chatId)),
		getChats: ( value ) => dispatch(createLoadChatsAction(value)),
		createChat: ( value ) => dispatch(createPostChatRequestAction(value)),

	};
}

class ChatList extends Component {
	componentDidMount() {
		this.props.getChats();
	}

	onChatItemClickHandler = ( event ) => {
		console.log(event.currentTarget);
		this.props.selectChat(event.currentTarget.id)
	};

	render() {
		const chatsList = [];
		const {chats: {chats}, user, children, createChat, isFething} = this.props;
		for (const chatId in chats) {
			chatsList.push(<li key={chatId} id={chatId} onClick={this.onChatItemClickHandler}>{chats[chatId].name}</li>)
		}

		return (<>
				{children}
				<ul>{
					isFething? 'loading':chatsList
				}</ul>
				<button onClick={() => {
					const chatname = window.prompt("nameChat");
					createChat({name: chatname});
				}}/>
			</>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChatList);