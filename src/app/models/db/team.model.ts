export interface Team {
  _id: string
  name: string
  users: TeamUser[]
}

export interface TeamUser {
  _id: string
  username: string
}
