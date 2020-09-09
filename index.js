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

const address = new Address({
    streetName:'rue de paris',
    streetNumber:'12',
    postCode:'75',
    city:'paris'
});

address.save((err, addressdb)=>{
    if(err !== null){
        console.log('err',err)
        return;
    }
    console.log('addressdb',addressdb)
    const student = new Student({
        firstName:'hafida',
        surname:'belle',
        address: address._id,
    });
    student.save((err, studentbd)=>{
        if(err!==null){
            console.log('err student',err)
            return;
        }
    })
})

