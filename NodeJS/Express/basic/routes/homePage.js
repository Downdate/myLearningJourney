const express = require('express')
const router  = express.Router()
const Rng     = require('rng')
const mt      = new Rng.MT(23165)



router.get('/', (req, res ) => {

    let number = mt.range(1,100)
    res.render('index',{title:'my express app',message:'hello world!',number:`${number}`})

})

module.exports = router