import { io } from "socket.io-client";

const apiURL = process.env.REACT_APP_WS_URL;

const connectionWS = () => {
  const socket = io(apiURL, { transports: ["websocket"] });
}