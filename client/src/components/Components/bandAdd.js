import { useContext, useState } from "react"
import { SocketContext } from "../context/socket.context"

export const BandAdd = () => {

    const [value, setValue] = useState('')
    const { socket } = useContext(SocketContext)

    const onSubmit = (ev) => {
        ev.preventDefault()
        setValue(ev.target.value)
        if (value.trim().length > 0) {
            socket.emit('new-band', { name: value })
            setValue('')
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                <h6 className="card-subtitle">Agregan Banda</h6>
            </div>
            <form onSubmit={onSubmit}>
                <div className="card-body">
                    <input
                        className="form-control"
                        placeholder="nombre nueva banda"
                        type='text'
                        value={value}
                        onChange={ev => setValue(ev.target.value)}
                    />

                </div>
                <div className="card-footer text-center">
                    <input
                        type='submit'
                        className="btn btn-success" />
                </div>
            </form>
        </div>
    )
}