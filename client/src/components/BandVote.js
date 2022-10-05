import { useEffect, useState } from "react";
import { connectSocketServer } from "../socket/connect";
import { BandAdd } from "./Components/bandAdd";
import { BandList } from "./Components/bandlist";



export const BandVote = () => {

  const [socket] = useState(connectSocketServer)
  const [bands, setBands] = useState([])
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

  },[socket])

  useEffect(() => {
    socket.on('currentbands', b => {
      setBands(b)
    })
  }, [socket])

  const vote = (id) => {
    socket.emit('vote-band',{id})
  } 
  
  const drop = (id) => {
    socket.emit('drop-band',{id})
  }


  const rename = (id, name)=>{
    socket.emit('change-name-band',{id,name})
  }

  const newBand = (name)=>{
    console.log({namefx:name})
    socket.emit('new-band',{name})
  }
  
  return (
    <div className="container">
      <div className="alert">
        services State:
        <span className={state.class}> {state.msg}</span>
      </div>
      <h3 className='title'>Band Names</h3>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
          <BandList
            list={bands} 
            vote={vote}
            drop={drop}
            rename={rename}
            />
        </div>
        <div className='col-2'></div>
        <div className='col-4'></div>
        <div className='col-4'>
          <BandAdd 
          newBand={name => newBand(name)}
          />
        </div>
        <div className='col-4'></div>
      </div>
    </div>
  );
}

