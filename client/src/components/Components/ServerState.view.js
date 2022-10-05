import { useContext } from "react"
import { SocketContext } from "../context/socket.context"

//! vista abandonada por las multiples conecciones que genera
export const ServerStateView = () => {

    const { state } = useContext(SocketContext)

    return (
        <div className="alert">
            services State:
            <span className={state.class}> {state.msg}</span>
        </div>
    )
}