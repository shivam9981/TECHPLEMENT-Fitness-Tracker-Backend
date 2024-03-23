const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.port || 5000;
const connectDB = require('./DB');
const dotenv = require('dotenv');
dotenv.config()
app.use(express.json())
app.use(cors())
connectDB();
app.use('/api/auth' ,require('./routes/sign'));
app.listen(port , ()=>{
    console.log("nodemon server running...........")
});