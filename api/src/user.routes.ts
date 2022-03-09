import Express from 'express'
import bcrypt from 'bcrypt'
import db from './db'
import { Document, WithId } from 'mongodb'

interface User extends WithId<Document> {
  username: string
  password: string
  salt: string
}

const router = Express.Router()

router.post('/login', (req: Express.Request, res: Express.Response) => {
  const username = String(req.query.username)
  const password = String(req.query.password)

  db.collection('users')
    .findOne({
      username,
    })
    .then((potentialUser: User) => {
      if (potentialUser) {
        const hash = bcrypt.hashSync(password, potentialUser.salt)
        const passwordHash = potentialUser.password

        if (hash === passwordHash) {
          res.send({
            _id: potentialUser._id,
            username: potentialUser.username,
          })
        } else {
          res.sendStatus(401)
        }
      } else {
        res.sendStatus(401)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.post('/register', (req: Express.Request, res: Express.Response) => {
  const username = req.body.username
  const password = req.body.password

  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  db.collection('users')
    .insertOne({
      username,
      salt,
      password: hash,
    })
    .then((data) => {
      res.send(data)
    })
})

export default router
