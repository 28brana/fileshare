const express=require('express');
const app = express();
const PORT=process.env.PORT || 3000;
const path=require('path');

app.use(express.static('public'));
app.use(express.json());
// set Template Engine
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

// Connecting to database
const connectDB= require('./config/db');
connectDB();

// Routes

app.use('/api/files',require('./routes/files'));

app.use('/files',require('./routes/show'));

app.use('/files/download',require('./routes/download'));

app.listen(PORT,()=>{
    console.log("Working")
})