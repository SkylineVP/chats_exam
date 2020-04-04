import { chatSocket } from './index.js';

export const sendMessage = ( chatId, message ) => chatSocket.emit('message', chatId, message);
export const newChat = () => chatSocket.emit('newChat');
export const joinToChats = ( user ) => chatSocket.emit('join to chats', user);
export const joinToChat = ( chatId ) => chatSocket.emit('join to chat', chatId);




