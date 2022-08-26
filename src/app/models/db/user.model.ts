export interface User {
  _id: string
  username: string
  role: UserRole
  name: string
}

export enum UserRole {
  ADMIN = 'ADMIN',
  SCRUM_MASTER = 'SCRUM_MASTER',
  PRODUCT_OWNER = 'PRODUCT_OWNER',
  TEAM_MEMBER = 'TEAM_MEMBER',
}
