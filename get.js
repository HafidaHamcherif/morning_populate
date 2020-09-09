const mongoose = require('mongoose');
//connect bdd
mongoose.connect('mongodb://localhost:27017/populate');

//schema
const studentSchema = new mongoose.Schema({
    firstName:String,
    surname:String,
    address:{
        type:mongoose.Types.ObjectId,
        ref:'Address'
    }
});

const addressSchema = new mongoose.Schema({
    streetName:String,
    streetNumber:String,
    postCode:String,
    city:String
    
});

const Student = mongoose.model('Student',studentSchema);
const Address = mongoose.model('Address', addressSchema);

Student
    .findOne({firstName: 'hafida'})
    .populate('address')
    .exec((err,studentdb)=>{
        if(err !== null){
            console.log('get err',err)
            return;
        }
        console.log('studentdb',studentdb)
    })