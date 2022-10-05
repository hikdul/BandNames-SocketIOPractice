import { useEffect, useMemo, useState } from "react"
import { connectSocketServer } from "../../socket/connect"


export const useSocket = (serverPath) =>{

  //? el use memo es para que no me cree nuevas instancias en base a lo que es necesario
  const socket = useMemo(()=> connectSocketServer(serverPath), [serverPath])
    
  const [state, setState] = useState({ class: 'text-info', msg: 'init' })


  useEffect(() => {
    if (!socket.connected)
      setState({ class: 'text-danger', msg: 'Offline' })
    if (socket.connected)
      setState({ class: 'text-success', msg: 'Online' })
  }, [socket])

  useEffect(() => {

    socket.on('connect', () => {
      setState({ class: 'text-success', msg: 'Online' })
    })

  }, [socket])

  useEffect(() => {

    socket.on('disconnect', () => {
      setState({ class: 'text-danger', msg: 'Offline' })
    })

  }, [socket])


    return{
        socket,
        state
    }
}