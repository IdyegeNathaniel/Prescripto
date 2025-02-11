import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

//app config
const port = process.env.PORT || 4000
const app = express()
connectDB()
connectCloudinary()


//middleware
app.use(express.json())
app.use(cors())

//api endpoint

app.use("/api/admin", adminRouter)

app.get("/", (req, res) => {
    res.send('API working with nodemon')
})


app.listen(port , () => console.log("The server has started", port))