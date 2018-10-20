const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('This is the get route for the API')
})

app.listen(7555, () => {
    console.log('Server running on http://localhost:7555')
})