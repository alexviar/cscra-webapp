export type User = {
  id: number,
  username: string,
  active: boolean,
  createdAt: string,
  updatedAt: string,
  externalId: number
}

export type LoginForm = {
  fields: {
    username: string,
    password: string
  }
  errors: {
    username: string,
    password: string
  },
  message: string
}