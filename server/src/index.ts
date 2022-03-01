// const express = require('express')
import Express from 'express'
const app = Express()
const port = 8080

app.get('/', (request: Express.Request, res: Express.Response) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
