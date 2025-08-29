import sequelize from "./config/db.js";
import express from 'express'
import router from "./routes/mainroute.js";

const app = express()
app.use(express.json())

app.use('/data',router)

app.listen(3000,()=>{
    console.log("Server Running"); 
})

sequelize.sync({alter:true})
