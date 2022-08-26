import { WithId } from 'mongodb'

export default interface User extends WithId<Document> {
  username: string
  password: string
  salt: string
  role: string
}
