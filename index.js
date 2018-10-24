const express = require('express')
const bodyParser = require('body-parser')
var SuppliersRoutes = require("./routes/supplier_router");
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('This is the get route for the API')
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running ${process.env.PORT || 8080}` )
})

app.use("/suppliers", SuppliersRoutes);