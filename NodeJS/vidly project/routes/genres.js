const express = require('express')
const Joi = require("joi")
const router  = express.Router()
const {log} = require("debug")
const mongoose = require("mongoose")

const Genre = mongoose.model('Genre',new mongoose.Schema({
    name: {
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    }
}))

router.get('/', async (req,res)=> {

    const genres = await Genre.find().sort('name')

    res.send(genres)
})

router.get('/:id', async (req,res) => {
    const genre = await Genre.findById(req.params.id)
   if (!genre){
        return res.status(404).send(`genre with the ID (${req.params.id}) was not found`)
    }

    res.send(genre)
})

router.post('/', async (req,res) => {

    const {error} = validateGenre(req)
    if (error){
        return res.status(400).send(error.details[0].message)
    }

    let genre = new Genre({
        name: req.body.name
    })
    genre = await genre.save()
    res.send(genre)
})

router.put('/:id', async (req,res) => {
    const {error} = validateGenre(req)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    const genre = await Genre.findByIdAndUpdate(req.params.id, {name: req.body.name},{new: true})

    if (!genre){
        return res.status(404).send(`genre with the ID (${req.params.id}) was not found`)
    }

    res.send(genre)
})

router.delete('/:id',async (req,res) => {
    const genre =await Genre.findByIdAndRemove(req.params.id)

    if (!genre){
        return res.status(404).send(`genre with the ID (${req.params.id}) was not found`)
    }

    res.send(`genre ${genre} deleted!`)
})



module.exports= router