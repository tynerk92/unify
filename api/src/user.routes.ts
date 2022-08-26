import Express from 'express'
import bcrypt from 'bcrypt'
import db from './db'
import { Document, WithId } from 'mongodb'
import { HttpStatus } from './http-status-codes'
import User from './users/user.model'

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
            role: potentialUser.role,
          })
        } else {
          res.sendStatus(HttpStatus.UNAUTHORIZED)
        }
      } else {
        res.sendStatus(HttpStatus.UNAUTHORIZED)
      }
    })
    .catch(() => {
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    })
})

router.post('/register', (req: Express.Request, res: Express.Response) => {
  const username = req.body.username
  const password = req.body.password
  const role = req.body.role

  const salt = bcrypt.genSaltSync(10)
  const passwordHash = bcrypt.hashSync(password, salt)

  db.collection('users')
    .insertOne({
      username,
      salt,
      password: passwordHash,
      role,
    })
    .then((data) => {
      res.send(data)
    })
})

router.post('/create', (req: Express.Request, res: Express.Response) => {
  const name = req.body.name
  const username = req.body.username
  const role = req.body.role

  db.collection('users')
    .insertOne({
      name,
      username,
      salt: '',
      password: '',
      role,
    })
    .then((data) => {
      res.send(data)
    })
})

router.get('/list', async (req: Express.Request, res: Express.Response) => {
  const page: number = req.query.page ? Number(req.query.page) : 0
  const perPage: number = Number(req.query.perPage)

  const result = await db
    .collection('users')
    .aggregate([
      {
        $project: {
          name: 1,
          username: 1,
          role: 1,
        },
      },
      // TODO reinstate this skip/limit once pagination is figured out
      // {
      //   $skip: page * perPage,
      // },
      // {
      //   $limit: perPage,
      // },
    ])
    .toArray()

  const count = await db.collection('users').countDocuments()

  res.send({ users: result, count })
})

router.get('/search', async (req: Express.Request, res: Express.Response) => {
  const partialUserName = req.query.username

  const result = await db
    .collection('users')
    .aggregate([
      {
        $search: {
          index: 'users-search',
          autocomplete: {
            query: partialUserName,
            path: 'username',
          },
        },
      },
      {
        $project: {
          _id: 1,
          username: 1,
          role: 1,
        },
      },
    ])
    .toArray()

  res.send({ users: result, count: result.length })
})

export default router
