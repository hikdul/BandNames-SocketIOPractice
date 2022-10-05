const Band = require("./band");

class BandList {

    constructor() 
    {
        this.bands = [
            new Band('Metallica'),
            new Band('MushroomHead'),
            new Band('Slipknot')
        ]
    }

    getBands()
    {
        return this.bands
    }

    addBand(name)
    {
        console.log({name})
        const newBand = new Band(name)
        console.log({newBand})
        this.bands.push(newBand)
    }
    
    removeBand(id)
    {
        this.bands = this.bands.filter(band => band.id !== id)
    }
    
    increaseVotes(id)
    {
        this.bands= this.bands.map( band => {
            if(band.id === id)
                band.votes = band.votes + 1
            return band
        })
    }
    
    changeName(id,name)
    {
        this.bands= this.bands.map( band => {
            if(band.id == id)
                band.name = name
            return band
        })
    }

}

module.exports = BandList