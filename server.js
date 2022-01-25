const express=require('express');
const app = express();
const PORT=process.env.PORT || 3000;
const path=require('path');
const cors = require('cors');

app.use(express.static('public'));
app.use(express.json());
// set Template Engine
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

// Connecting to database
const connectDB= require('./config/db');
connectDB();


// Cors 
const corsOptions = {
  origin: ["http://127.0.0.1:5500"]
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}


app.use(cors(corsOptions))

// Routes


app.use('/api/files',require('./routes/files'));

app.use('/files',require('./routes/show'));

app.use('/files/download',require('./routes/download'));

app.listen(PORT,()=>{
    console.log("Working")
})