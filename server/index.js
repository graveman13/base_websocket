import { createServer } from "http";
import { Server } from "socket.io";
import { servicesHandler } from './src/services/index.js'

const httpServer = createServer()

const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
})
const onConnection = (socket) => {
  console.log('User connected')

  servicesHandler(socket);

  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
}

io.on('connection', onConnection);

const PORT = process.env.PORT || 5000

httpServer.listen(PORT, () => {
  console.log(`Server ready. Port: ${PORT}`)
})

// const WebSocket = require('ws');
// const wsServer = new WebSocket.Server({ port: 9000 });

// wsServer.on('connection', onConnect);

// function onConnect(wsClient) {
//   console.log('Server-client connect');
//   wsClient.send('Hi');

//   wsClient.on('close', function () {
//     console.log('Server-client disconnect');
//   });

//   wsClient.on('message', function (message) {
//     console.log(message);
//     try {
//       const jsonMessage = JSON.parse(message);
//       switch (jsonMessage.action) {
//         case 'ECHO':
//           wsClient.send(jsonMessage.data);
//           break;
//         case 'PING':
//           wsClient.send('PiNG');
//           break;
//         default:
//           console.log('default command');
//           break;
//       }
//     } catch (error) {
//       console.log('Error', error);
//     }
//   });
// }
