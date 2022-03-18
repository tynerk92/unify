import Express from 'express'
import db from './db'
import { Document, WithId } from 'mongodb'
import { HttpStatus } from './http-status-codes'

interface Team extends WithId<Document> {
  name: string
  userIds: string[]
}

const router = Express.Router()

router.post('/create', (req: Express.Request, res: Express.Response) => {
  const teamName = req.query.teamName

  db.collection('teams')
    .insertOne({
      name: teamName,
      userIds: [],
    } as Team)
    .then(() => {
      res.sendStatus(HttpStatus.NO_CONTENT)
    })
    .catch(() => {
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    })
})

export default router
