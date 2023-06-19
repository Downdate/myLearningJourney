const express = require('express')
const Joi = require("joi");
const router  = express.Router()

const genres = [
    { id:1, name:"genre1"},
    { id:2, name:"genre2"},
    { id:3, name:"genre3"},
    { id:4, name:"genre4"}
]

function validateGenre(genre){
    const schema = Joi.object(
        {
            name : Joi.string().min(3).required()
        }
    )
    return schema.validate(genre.body)
}

router.get('/', (req,res)=>{
    res.send(genres)
})

router.get('/:id', (req,res) => {
    const genre = genres.find(o => o.id === req.params.id)
    if (!genre){
        return res.status(404).send(`genre with the ID (${req.params.id}) was not found`)
    }

    res.send(genre)
})

router.post('/', (req,res) => {

    const {error} = validateGenre(req)
    if (error){
        return res.status(400).send(error.details[0].message)
    }

    const genre = {
        id: genres.length +1 ,
        name: req.body.name
    }

    genres.push(genre)

    res.send(genre)

})

router.put('/:id', (req,res) => {
    const genre = genres.find(o => o.id === req.params.id)
    if (!genre){
        return res.status(404).send(`genre with the ID (${req.params.id}) was not found`)
    }
    const {error} = validateGenre(req)

    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    genre.name = req.body.name
    res.send(genre)
})

router.delete('/:id',(req,res) => {
    const genre = genres.find(o => o.id === req.params.id)
    if (!genre){
        return res.status(404).send(`genre with the ID (${req.params.id}) was not found`)
    }

    const index = genres.indexOf(genre)
    genres.splice(index)
    res.send(`genre ${genre} deleted!`)
})



module.exports= router