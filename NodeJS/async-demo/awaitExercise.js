//making our async function
async function advertisementEmail(id) {
    try {
        const customer = await getCustomer(id)
        console.log('Customer: ',customer)
        if (customer.isGold){
            const movies = await getTopMovies()
            console.log(`Movies: `,movies)
            sendEmail(customer.email,movies)
        }
        else{
            console.log(`customer is not gold`)
        }
    }
    catch (err) {
        console.log('Error: ',err.message)
    }

}
//testing it
advertisementEmail(1)

function getCustomer(id){
    return new Promise((resolve, reject)=>{
        setTimeout(
            resolve({
                id: id,
                name:'Daniel',
                isGold: true,
                email:'email@mail.com'
            })
        ,2000)
    })
}
function getTopMovies(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(['movie1','movie2','movie3'])
        },2000)
    })
}

function sendEmail(email,movies) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`email containing ${movies} sent to ${email}`)
            resolve()
        },2000)

        })
}