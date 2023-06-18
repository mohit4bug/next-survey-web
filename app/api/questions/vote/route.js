import { NextResponse } from 'next/server'
import dbConnect from '../../../../lib/mongodb'
import Questions from '../../../../models/Questions'

export async function GET(request) {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const questionText = searchParams.get('question')
    const voteName = searchParams.get('votename')

    const q = await Questions.findOne() // Assuming there's only one document in the collection
    const allQues = q.questions

    const foundQuestion = allQues.find((q) => q.question === questionText)
    foundQuestion.votes += 1

    if (foundQuestion) {
        const foundOption = foundQuestion.options.find((option) => option.name === voteName)

        if (foundOption) {
            foundOption.votes += 1

            await q.save()

            return NextResponse.json({ msg: foundOption.name })
        } else {
            return NextResponse.json({ error: 'Option not found' })
        }
    } else {
        return NextResponse.json({ error: 'Question not found' })
    }
}