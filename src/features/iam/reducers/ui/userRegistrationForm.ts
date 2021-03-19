import { FormState } from "../../../../commons/types";

type Fields = {

}
const initialState: FormState<Fields> = {
  fields: {},
  errors: {},
  messages: {}
}
export default (state: FormState<Fields> = initialState, action: any): FormState<Fields>=>{
  return state
}