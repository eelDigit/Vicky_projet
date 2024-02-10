import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({

    category: {
        type: String,
        enum: ['particulier', 'entreprise'],
        required: true,
    },
    
    name: {
        type: String,
        uppercase: true, 
        required: true,
        trim: true,
    },

    firstName: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true,
    },

    phone: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
    },

    subject: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
    },

    message:{
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true,
    },

    role: {
        type: String,
        enum: ['admin', 'user'],
        default: "user",
        required: true,
    },

}, {
    timestamps: true
})