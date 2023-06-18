import mongoose from "mongoose"

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    options: [
        {
            name: {
                type: String,
                required: true,
            },
            votes: {
                type: Number,
                default: 0
            }
        }
    ],
    votes: {
        type: Number,
        default: 0,
    },
})

const questionsSchema = new mongoose.Schema({
    questions: [questionSchema],
})

const Questions = mongoose.models.Question || mongoose.model('Question', questionsSchema)
export default Questions
