import { useContext, useEffect, useState } from "react"
import { SocketContext } from "../context/socket.context"
import { ElementForList } from "./bandListElement"

export const BandList = () => {

    const [bands, setBands] = useState([])

    const { socket } = useContext(SocketContext)

    // -- para obtener el listado de bandas actuales
    useEffect(() => {
        socket.on('currentbands', b => {
            setBands(b)
        })
    }, [socket])

    return (
        <table className="table table-stripped">
            <thead>
                <tr className="text-center">
                    <th></th>
                    <th>band Name</th>
                    <th>Total Points</th>
                    <th>Drop</th>
                </tr>
            </thead>
            <tbody>
                {bands.map(band => ElementForList({ ...band, setBands }))}
            </tbody>
        </table>
    )
}
