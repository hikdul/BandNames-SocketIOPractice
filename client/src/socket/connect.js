
import io from 'socket.io-client' 

export const connectSocketServer = (serverPath) => {
  const socket = io.connect(serverPath,
    {
      transports: ['websocket']
    })
  return socket
}