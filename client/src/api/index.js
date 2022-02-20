import { io } from "socket.io-client";

const apiURL = process.env.REACT_APP_WS_URL;
const socket = io(apiURL);

export default socket;