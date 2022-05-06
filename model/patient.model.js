const { Schema, model } = require('mongoose')

const patientSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    dob : {
        type : Date,
        required : true
    },
    place : {
        type : String,
        required : false
    },
    bloodGrooup : {
        type : String,
        required : false
    },
    gender : {
        type : String,
        required : false
    },
    height : {
        type : Number,
        required : false
    },
    weight : {
        type : Number,
        required : false
    }
})

const PatientModel = model('Patient', patientSchema)

module.exports = PatientModel;