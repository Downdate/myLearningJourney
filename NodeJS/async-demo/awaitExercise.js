async function advertisementEmail(id) {
    try {
        const customer = await getCustomer(1)
        console.log(customer)
        if (customer.isGold){
            const movies = await getTopMovies()
            sendEmail(customer.email,movies)
        }
    }
    catch (err) {
        console.log('Error: ',err.message)
    }

}
advertisementEmail()
function getCustomer(id){
    return new Promise((resolve, reject)=>{
        setTimeout(
            resolve({
                id: id,
                name:'Daniel',
                isGold: true,
                email:'email'
            })
        ,2000)
    })
}
function getTopMovies(){
    return new Promise((resolve, reject)=>{
        resolve(['movie1','movie2','movie3'])
    })
}

function sendEmail(email,movies) {
    return new Promise((resolve, reject)=>{
        console.log(`email containing ${movies} sent to ${email}`)
        resolve()
        })
}