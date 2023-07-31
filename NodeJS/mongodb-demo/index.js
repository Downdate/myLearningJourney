const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/playground')
    .then(() => console.log('connected to mongodb...') )
    .catch(err => console.error('Could not connect to mongodb...',err))

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 200,
        //match: /pattern/
    },
    category:{
        type: String,
        enum: ['web', 'mobile','network']
    },
    author: String,
    tags: {
        type: Array,
        validate:{
            isAsync: true,
            validator: function (v,callback) {
                setTimeout(()=> {
                    // some async work
                    const result = v && v.length > 0
                    callback(result)
                },4000)
            },
            message:'the course should have at least 1 tag'
        }
    },
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    price: {
        type: Number ,
        //if the course is published require price
        required: function () { return this.isPublished}
    }
})

const Course = mongoose.model('course', courseSchema)

async function createCourse(){
    const courseNo1 = new Course({
        name: 'node.js Course',
        author: 'Dan',
        category: 'web',
        tags: ['node','backend'],
        isPublished: true,
        price: 10
    })

    try{
        //await courseNo1.validate()

        const result = await courseNo1.save()
        console.log(result)
    }
    catch (ex) {
        //console.log(ex.message)

        for (field in ex.errors){
            console.log(ex.errors[field].message)
        }
    }

}

async function getCourses(){
    const pageNumber = 2
    const pageSize = 10
    const courses = await Course
        // exact filters
        //.find({author: 'Dan', isPublished: true , price: { $gte: 10}})

        // logical filters
        //.find()
        //.or([{author: 'Alex'},{isPublished:true}])

        //starts with Dan
        .find({author: /^Dan/i})

        //ends with Dan
        //.find({author: /Dan$/i})

        //contains Dan
        //.find({author: /.*Dan.*/i})

        //.skip((pageNumber-1)*pageSize)

        .limit(10)
        .sort({name: 1 })
        //.count()
        .select({
            name: 1 , tags: 1
        })
    console.log(courses)
}

async function updateCourseRet(id){
    // query first then update approach
    const course = await Course.findById(id)
    if (!course) return
    course.isPublished = true
    course.author = 'Another Author'
    //set method for updating
    //course.set({
    //    isPublished: true,
    //    author: 'Another Author'
    //})
    const result = await course.save()
    console.log(result)
}

async function updateCourse(id){
    // direct update approach
    const result = await Course.findByIdAndUpdate({_id: id},{
        $set:{
            author: 'Alex',
            isPublished: false
        }
    },{new: true})
    console.log(result)
}

async function removeCourse(id){
    //const result = await Course.deleteOne({ _id : id})
    const course = await Course.findByIdAndRemove(id)
    //console.log(result)
    console.log(course)
}

//getCourses()
createCourse()
//updateCourseRet('64c63f92f998ce3420c762f6')
//updateCourse('64c63f92f998ce3420c762f6')
//removeCourse('64c63f92f998ce3420c762f6')