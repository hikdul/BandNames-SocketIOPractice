import { useState } from "react"

export const BandAdd = ({newBand}) => {

    const [value, setValue] = useState('')

    const onSubmit = (ev) => {
        ev.preventDefault()

        if(value.trim().length>0)
             newBand(value)
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