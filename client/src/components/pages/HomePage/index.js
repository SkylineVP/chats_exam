import React    from 'react';
import ChatList from "../../ChatsList";

const HomePage = (props) => {
  return (
    <div>
      <h1>Home page</h1>
        <ChatList>
            Chatlist
        </ChatList>
    </div>
  );
};

export default HomePage;