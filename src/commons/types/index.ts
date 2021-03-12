type Error<Field> = Field extends {} ? Errors<Field> : 
    Field extends Array<infer T> ? Array<Error<T>> : string

type Errors<Fields> = {
  [k in keyof Fields]?: Error<Fields[k]>
}

export type FormState<Fields> = {
  fields: Fields,
  errors: Errors<Fields>
  messages: {
    info?: string,
    warning?: string,
    danger?: string
  }
}