import { Ctx } from "blitz"
import db, { Prisma } from "db"

type DeleteQuestionInput = Pick<Prisma.QuestionDeleteArgs, "where">

export default async function deleteQuestion({ where }: DeleteQuestionInput, ctx: Ctx) {
  ctx.session.authorize()

  const question = await db.question.delete({ where })

  return question
}
