import io                              from 'socket.io-client';
import store                           from "../../store";
import { createNewChatMessagesAction } from "../../actions";

const socket = io('ws://localhost:3000/');
export const chatSocket = io('ws://localhost:3000/chat');


export default socket;