const BandList = require("./band-list");

class Sockets {

    constructor(io) {

        this.io = io;

        this.bandList = new BandList()

        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', (socket) => {

            console.log(`Client connect, ID: ${socket.id}`)

            // emit to client the bandList

            socket.emit('currentbands', this.bandList.getBands())

            // votar por la banda

            socket.on('vote-band', ({ id }) => {
                this.bandList.increaseVotes(id)
                this.io.emit('currentbands', this.bandList.getBands())

            })

            // borrar una banda
            socket.on('drop-band', ({ id }) => {
                this.bandList.removeBand(id)
                this.io.emit('currentbands', this.bandList.getBands())
            })

            // cambiar el nombre
            socket.on('change-name-band', ({ id, name }) => {
                this.bandList.changeName(id, name)
                this.io.emit('currentbands', this.bandList.getBands())
            })

            // agregar banda
            socket.on('new-band', ({ name }) => {
                console.log({name})
                this.bandList.addBand(name)
                this.io.emit('currentbands', this.bandList.getBands())
            })
        })
    }
}


module.exports = Sockets;