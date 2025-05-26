let express= require("express")
let mongoose =require("mongoose")
const enquiryRouter = require("./App/Routes/enquiryRoutes")
require('dotenv').config()
const cors = require('cors');
let app = express()
app.use(cors())
app.use(express.json())


app.use('/api/web/enquiry' , enquiryRouter)



mongoose.connect(process.env.DbUrl).then(()=>{
    console.log("Database Connected");
    app.listen(process.env.Port,()=>{
        console.log("Server is Running on Port" ,process.env.Port);
    })
}).catch((err)=>{
    console.log(err);
    
})