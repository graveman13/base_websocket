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
