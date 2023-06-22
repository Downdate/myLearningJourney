//simple examples of resolve and reject
const p = Promise.resolve({id: 1})

p.then(result => console.log(result))

const pr = Promise.reject( new Error('reason for rejection'))

pr.catch(error => console.log(error.message))

Promise.race([p])
    .then(()=> console.log(`============================================`))


// simulation of multiple async operations

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async operation #1')
        resolve(1)
    },2000)
})

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async operation #2')
        resolve(2)
    },2000)
})

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('async operation #3')
        //reject(new Error('something went wrong'))
        resolve(3)
    },2000)
})

const p4 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async operation #4')
        resolve(4)
    },2000)
})

Promise.all([p1,p2,p3,p4])
    .then(result => console.log(result))
    .catch(err => console.log('Error: ', err.message))

Promise.race([p1,p2,p3,p4])
    .then(result => console.log(`operation #${result} completed first!`))
    .catch(err => console.log('Error: ', err.message))