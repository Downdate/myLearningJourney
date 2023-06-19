const Joi       = require("joi");
const express   = require('express')


const router = express.Router()

const courses = [
    { id : 1 , name : 'course1'},
    { id : 2 , name : 'course2'},
    { id : 3 , name : 'course3'},
    { id : 4 , name : 'course4'},

]

router.get('/', (req, res) => {
    res.send(courses)
})

router.get('/:id' , (req, res) =>{
        const course = courses.find(o => o.id === parseInt(req.params.id) )
        if (!course){
            return res.status(404).send('course with the given ID was not found.' )
        }
        res.send(course)

    }
)



router.post('/', (req, res) => {

    const {error} = validateCourse(req.body)

    if (error){
        // 400 bad request
        res.status(400).send(error.details[0].message)
        return
    }

    const course ={
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
} )

router.put('/:id' , (req, res) => {

    const course = courses.find(o => o.id === parseInt(req.params.id) )
    if (!course){
        return res.status(404).send(`course with the (${req.params.id}) ID was not found.`)
    }

    const {error} = validateCourse(req.body)

    if (error){
        // 400 bad request
        res.status(400).send(error.details[0].message)
        return
    }

    course.name = req.body.name
    res.send(course)


})

router.delete('/:id', (req, res) => {

    const course = courses.find(o=> o.id === parseInt(req.params.id))
    if (!course){
        return res.status(404).send(`course with the (${req.params.id}) ID was not found.`)
    }

    const index = courses.indexOf(course)

    courses.splice(index , 1)

    res.send(course)



})

function validateCourse(course){
    const schema = Joi.object({
        name:Joi.string().min(3).required()
    })
    return  schema.validate(course.body)
}

module.exports = router