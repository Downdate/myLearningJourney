console.log('before')
//get the user
getuser(1, (user) => {
    console.log(`user: `, user)

    // get the repositories
    getRepositories(user.githubUsername,(userRepo) => {
        console.log('Repositories: ',userRepo)
    })
})

console.log('after')

function getuser(id, callback) {
    console.log('reading a user from database!')
    setTimeout(()=>{
        callback({id: id, githubUsername: `Daniel`})
    },2000)
}

function getRepositories (username, callback) {
    setTimeout(() => {
        console.log(`getting ${username}'s repositories from database ....`)
        callback(['repo1','repo2','repo3'])
    }, 2000)
}