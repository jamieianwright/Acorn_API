const express = require('express')
const bodyParser = require('body-parser')
const SuppliersRoutes = require("./routes/supplier_router");
const ComponentsRoutes = require("./routes/component_router");
const ProjectsRoutes = require("./routes/project_router");
const UsersRouter = require("./routes/user_router");
const cors = require('cors')
const passport = require('./config/passport')

const app = express()

app.use(passport.initialize())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('This is the get route for the API')
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running ${process.env.PORT || 8080}`)
})

app.use("/suppliers", SuppliersRoutes);
app.use("/components", ComponentsRoutes);
app.use("/projects", ProjectsRoutes);
app.use("/", UsersRouter);
