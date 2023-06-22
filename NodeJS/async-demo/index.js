console.log('before')
//get the user
getuser(1)
    .then(user => getRepositories(user.githubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('commits: ',commits))

console.log('after')

function getuser(id) {
    return new Promise((resolve,reject) => {
        console.log('reading a user from database!')
        setTimeout(()=>{
            resolve({id: id, githubUsername: `Daniel`})
        },2000)
    })
}

function getRepositories (username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`getting ${username}'s repositories from database ....`)
            resolve(['repo1','repo2','repo3'])
        }, 2000)
    })
}
function getCommits(repository) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`getting the commits for ${repository} ....`)
            resolve([`commit1`,`commit2`,`commit3`])
        },2000)
    })

}