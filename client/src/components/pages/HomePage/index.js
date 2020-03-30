import React        from 'react';
import ChatList     from "../../ChatsList";
import MessagesList from "../../MessagesList";

const HomePage = ( props ) => {
	return (
		<div>
			<h1>Home page</h1>
			<ChatList>
				Chatlist
			</ChatList>
			<MessagesList/>
		</div>
  );
};

export default HomePage;