import { MongoClient, MongoClientOptions, ServerApiVersion } from 'mongodb'

const uri =
  'mongodb+srv://dev:ItSj1oLX9DECWtai@development.fjuz6.mongodb.net/Development?retryWrites=true&w=majority'
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
} as MongoClientOptions)

client.connect((err) => {
  if (err) console.error('Failed to connect to DB:', err)
})

export default client.db()
