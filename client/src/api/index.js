import { io } from 'socket.io-client';

const apiURL = process.env.REACT_APP_WS_URL;
const socket = io("http://localhost:5000");

export default socket;