const express = require('express')
const app = express()
const port = 3000

app.listen(port, (req, res) => {
    console.log('Listening on port ' + port)
})

app.get('/user', (req, res) => {
    console.log('get User')
})

app.post('/user', (req, res) => {
    console.log('post User')
})

app.patch('/user', (req, res) => {
    console.log('patch User')
})

app.delete('/user', (req, res) => {
    console.log('delete User')
})
