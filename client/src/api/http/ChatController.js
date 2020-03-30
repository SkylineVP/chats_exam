import http from './index.js';

export const getChats =()=> http.get('/chats');
export const createChat=(value)=>http.post('/chat',value);


