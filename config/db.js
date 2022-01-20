require('dotenv').config();
const mongoose =require('mongoose');

function connectDB(){
  const connection=mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true,  useUnifiedTopology: true });
  connection.then(()=>{
    console.log("SuccessFully Connected");
  }).catch((err)=>{
    console.log("Error ",err);
  })
  
}

module.exports = connectDB;