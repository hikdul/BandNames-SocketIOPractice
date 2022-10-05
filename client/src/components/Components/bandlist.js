import { useEffect, useState } from "react"

export const BandList = ({list, vote, drop, rename}) => {
    
    const[bands, setBands] = useState(list)
    
    useEffect(()=>{
        setBands(list)
    },[list])

    const changeName = (event, id) =>{
        const newName = event.target.value
        setBands( bands => bands.map(band =>{
            if(band.id === id)
                band.name = newName
            return band
        }))
        rename(id, newName)
    }
    
    const loseBlur = (id, name) =>{
        console.log({id,name})       
        // TODO: Disparar el evento del socket!!!
    }

    const tb = ({id,name,votes}) =>(<tr key={id} className="text-center">
            <td>
                <button
                  onClick={()=>vote(id)}
                  className="btn btn-success"> +1 </button>
            </td>
            <td>
                <input
                    className="form-control text-center"
                    onChange={(event)=>changeName(event,id)}
                    onBlur={()=>loseBlur(id,name)}
                    value={name} />
            </td>
            <td>
                <h3>{votes}</h3>
            </td>
            <td>
                <button
                 onClick={()=>drop(id)}
                 className="btn btn-danger"> 
                X
                </button>
            </td>
        </tr>
    )
    
    return(
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
                {bands.map(band => tb({...band}))}
            </tbody>
        </table>
    )
}
