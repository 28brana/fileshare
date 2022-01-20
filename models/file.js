const mongoose=require('mongoose');

const schema=mongoose.Schema;

const fileSchema = new schema ({
    filename:{type:String ,required:true},
    path:{type:String ,required:true},
    size:{type:Number ,required:true},
    uuid:{type:String ,required:true},
    sender:{type:String ,required:false},
    recevier:{type:String ,required:false}

},{timestamps:true});

module.exports = mongoose.model('File',fileSchema);