import http from './index.js';

export const getChats =()=> http.get('/chats');
export const createChat = ( value ) => http.post('/chat', value);
export const joinToChat = ( chatId ) => http.put('/chat', {chatId});


