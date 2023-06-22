getCustomer(1, (customer)=>{
    console.log('Customer: ',customer)
    if (customer.isGold){
        getTopMovies((movies)=>{
            console.log('top movies: ',movies)
            sendEmail(customer.email,movies,()=>{
                console.log('email sent...')
            })
        })
    }
})

function getCustomer(id,callback){
    setTimeout(()=>{
        callback({
            id: 1,
            name:'Daniel',
            isGold: true,
            email:'email'
        })
    },2000)
}
function getTopMovies(callback){
    let topMovies =['movie1','movie2','movie3']
    callback(topMovies)
}

function sendEmail(email,movies,callback) {
    callback()
}