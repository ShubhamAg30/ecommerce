const app = require("./app")

const dotenv = require("dotenv")
const connectDB = require("./config/database")


//config
dotenv.config({path:"backend/config/config.env"})

// Connect DB
connectDB()

app.listen(process.env.PORT, ()=>{

    console.log(`Server is started on http://localhost:${process.env.PORT}`)
})