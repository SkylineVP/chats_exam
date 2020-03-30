import React       from 'react';
import { connect } from 'react-redux';

const MessagesList = ( props ) => {
  let messages;
  if (props.chats.messages) {
    messages = props.chats.messages.map(( message ) => {
          return <li key={message._id}>
            <div>message.authorId</div>
            <div>message.body</div>
          </li>
        }
    )
  }
  else {
    messages = <li>empty Chat</li>
  }
  return (
      <ul>
        {
          props.currentChat
          ? messages
          : (<li>Select chat</li>)
        }
      </ul>
  );
};

const mapStateToProps = state => {

  return state.chats;

};

export default connect(mapStateToProps)(MessagesList);