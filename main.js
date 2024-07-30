const express = require('express')
const app = express()
const port = 3000

app.listen(port, (req, res) => {
    console.log('Listening on port ' + port)
})

app.get('/', (req, res) => {
    console.log('Use routing /')
})
