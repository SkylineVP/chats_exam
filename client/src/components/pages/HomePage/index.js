import React        from 'react';
import ChatList     from "../../ChatsList";
import MessagesList from "../../MessagesList"
import style        from './HomePage.module.scss'


const HomePage = ( props ) => {
	return (
		<div style={{display: 'flex'}}>
			<ChatList/>
			<MessagesList className={style.messagesList}/>
		</div>
	);
};

export default HomePage;