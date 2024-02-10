import mongoose from "mongoose";


const questionSchema = new mongoose.Schema ({
    userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    },
    message: String,
    answer: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            },
        content: String,
        date: Date
    }],
    status: {
        type: String,
        enum: ['traité', 'à traiter'],
        default: "à traiter",
    },
    category: {
        type: String,
        enum: ['particulier', 'entreprise'],
    },

}, {
    timestamps: true
})

const Question = mongoose.model("Question", questionSchema);


export default Question;