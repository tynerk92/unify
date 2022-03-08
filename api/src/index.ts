import Express from 'express'
import UserRoutes from './user.routes'
import bodyParser from 'body-parser'

const app = Express()
const port = 3000

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send({
    text: 'Hello Test',
  })
})

app.use('/user', UserRoutes)

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
