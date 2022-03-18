import Express from 'express'
import UserRoutes from './user.routes'
import TeamRoutes from './team.routes'

const app = Express()
const port = 3000

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.use('/user', UserRoutes)
app.use('/teams', TeamRoutes)

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})

process.on('exit', () => {})
