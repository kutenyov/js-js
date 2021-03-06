// setTimeout(() => {
//     console.log('Prepering data..')
//     const backEndData = {
//         serveer: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backEndData.modified = true 
//         console.log('Data received', backEndData)
//     }, 2000)
// }, 2000)

// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Request data...')
//         const backEndData = {
//             serveer: 'aws',
//             port: 2000,
//             status: 'working' 
//         }
//         resolve(backEndData)
//     }, 2000)
// })

// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//             // console.log('Data received', backEndData)
//         }, 2000)
//     })
// }).then(clientData => {
//     clientData.fromPromise = true
//     return clientData
// }).then(data => {
//     console.log('Modified', data)
// }).catch(err => console.error('Error: ', err))
// .finally(() => console.log('Finally'))

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

Promise.all([sleep(2000), sleep(5000)])
.then(() => {
    console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)])
.then(() => {
    console.log('Race promises')
})