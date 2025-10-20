// any top-level configuration
// install express, create an instance of express, and create PORT
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// import router.js
const router = require('./routes/router')

app.set('view engine', 'ejs')

// http://localhost:3000 => root route
app.use('/', router)

// start up server
app.listen(PORT, ()=> console.log(`Server is running at http://localhost:${PORT}`))