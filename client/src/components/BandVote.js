import { BandAdd, BandList,ServerStateView } from "./Components";
import { SocketProvider } from "./context/socket.context";
import { useSocket } from "./hooks/useSocket";


export const BandVote = () => {
  const { state } = useSocket('http://localhost:5000')

  return (

    <SocketProvider>
      <div className="container">
        <ServerStateView />
        <h3 className='title'>Band Names</h3>
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-8'>
            <BandList />
          </div>
          <div className='col-2'></div>
          <div className='col-4'></div>
          <div className='col-4'>
          <BandAdd /> 
          </div>
          <div className='col-4'></div>
        </div>
      </div>
    </SocketProvider>
  )
}

