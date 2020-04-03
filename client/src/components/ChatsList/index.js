import React, { Component }                                                           from 'react';
import { connect }                                                                    from 'react-redux';
import { createLoadChatsAction, createPostChatRequestAction, createSelectChatAction } from "../../actions";
import style                                                                          from './ChatList.module.scss';

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

		this.props.selectChat(event.currentTarget.id)
	};
	onCreateChatButtonClickHandler = () => {
		const chatname = window.prompt("nameChat");
		this.props.createChat({name: chatname});
	};

	render() {
		const chatsList = [];
		const {chats: {chats}, user, children, createChat, isFething} = this.props;
		for (const chatId in chats) {
			chatsList.push(<li key={chatId} id={chatId} onClick={this.onChatItemClickHandler}>{chats[chatId].name}</li>)
		}

		return (<div className={style.wrapper}>
				{children}
				<ul>{
					isFething ? 'loading' : chatsList
				}</ul>
				<div className={style.createChatButton} onClick={this.onCreateChatButtonClickHandler}>
					Create Chat
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChatList);