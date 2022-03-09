export interface User {
  _id: string
  username: string
  role: UserRole
}

export enum UserRole {
  ADMIN = 'ADMIN',
}
