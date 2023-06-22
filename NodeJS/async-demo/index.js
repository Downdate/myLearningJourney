console.log('before')
//get the user

getuser(1)
    .then(user => getRepositories(user.githubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('commits: ',commits))

//using async and await approach
async function displayCommits(user,repository) {
    //try catch block
    try {
        const userNumber = await getuser(user)
        const repos= await getRepositories(userNumber.githubUsername)
        const commits= await getCommits(repos[repository])
        console.log(commits)
    }
    catch (err) {
        console.log(`Error: `,err.message)
    }
    
}

displayCommits(1, 2)



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
            //reject(new Error(`could not get the repository`))
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