import { NextResponse } from 'next/server'
import dbConnect from '../../../lib/mongodb'
import Questions from "../../../models/Questions"

export async function GET() {

    await dbConnect()

    await Questions.create({
        questions: [
            {
                question: 'How long have you followed my content on LinkedIn?',
                options: [{ name: 'Less than 6 months', votes: 0 }, { name: '6 months - 1 year', votes: 0 }, { name: 'More than 1 year', votes: 0 }],
                votes: 0
            },
            {
                question: 'How appealing do you find my projects displayed on LinkedIn?',
                options: [{ name: 'Very interesting', votes: 0 }, { name: 'Quite interesting', votes: 0 }, { name: 'Not that interested', votes: 0 }],
                votes: 0
            },
            {
                question: 'Do you frequently work with the same technologies and tools as I do?',
                options: [{ name: 'Yes, most of them', votes: 0 }, { name: 'Some of them', votes: 0 }, { name: 'Not really', votes: 0 }],
                votes: 0
            },
            {
                question: 'Choose your favorite programming language among the following:',
                options: [{ name: 'Python', votes: 0 }, { name: 'JavaScript', votes: 0 }, { name: 'Java', votes: 0 }],
                votes: 0
            },
            {
                question: 'How often do you engage yourself in coding and programming?',
                options: [{ name: 'Daily', votes: 0 }, { name: 'A few times a week', votes: 0 }, { name: 'Less often', votes: 0 }],
                votes: 0
            },
            {
                question: 'How confident are you in your coding and programming skills?',
                options: [{ name: 'Very confident', votes: 0 }, { name: 'Moderately confident', votes: 0 }, { name: 'Still working on it', votes: 0 }],
                votes: 0
            },
            {
                question: 'Would you be open to collaborate with me on a real-life project if given the opportunity?',
                options: [{ name: 'Absolutely!', votes: 0 }, { name: 'Maybe', votes: 0 }, { name: 'I\'d rather not', votes: 0 }],
                votes: 0
            },
            {
                question: 'Have we ever interacted (message, comment, recommendation) via LinkedIn before?',
                options: [{ name: 'Yes', votes: 0 }, { name: 'Can\'t recall', votes: 0 }, { name: 'No, but looking forward to doing it now', votes: 0 }],
                votes: 0
            },
            {
                question: 'Do you liked Mohit\'s survey?',
                options: [{ name: 'Great One', votes: 0 }, { name: 'Sort of', votes: 0 }, { name: 'Not really', votes: 0 }],
                votes: 0
            },
        ]
    })
    const questions = await Questions.find()
    return NextResponse.json({ questions: questions[0].questions })
}