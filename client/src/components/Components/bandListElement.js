import { useContext } from "react"
import { SocketContext } from "../context/socket.context"


//-- visual de las datos de una banda 
export const ElementForList = ({ id, name, votes, setBands }) => {

    const { socket } = useContext(SocketContext)

    // -- para que cambie el nombre
    const changeName = (event, id) => {
        const newName = event.target.value
        setBands(bands => bands.map(band => {
            if (band.id === id)
                band.name = newName
            return band
        }))
    }

    // -- para disparar el cambio de nombre al perder el foco 
    const loseBlur = (id, name) => {
        socket.emit('change-name-band', { id, name })
    }

    // -- votar 
    const vote = id => socket.emit('vote-band', { id })

    // -- Eliminar
    const drop = (id) => socket.emit('drop-band', { id })

    return (<tr key={id} className="text-center">
        <td>
            <button
                onClick={() => vote(id)}
                className="btn btn-success"> +1 </button>
        </td>
        <td>
            <input
                className="form-control text-center"
                onChange={(event) => changeName(event, id)}
                onBlur={() => loseBlur(id, name)}
                value={name} />
        </td>
        <td>
            <h3>{votes}</h3>
        </td>
        <td>
            <button
                onClick={() => drop(id)}
                className="btn btn-danger">
                X
            </button>
        </td>
    </tr>
    )
}