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
  const teamName = req.body.teamName

  if (!teamName) {
    console.log(req)
    res.sendStatus(HttpStatus.BAD_REQUEST)
    return
  }

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

router.get('/list', (req: Express.Request, res: Express.Response) => {
  db.collection('teams')
    .find()
    .toArray()
    .then((data) => {
      res.send(data)
    })
})

export default router
