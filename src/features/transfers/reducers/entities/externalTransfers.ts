import { ExternalTransfer } from "../../state"

export default (state: ExternalTransfer[]=[], action: any): ExternalTransfer[] => {
  const {type, payload, error, meta} = action
  switch(type){
    case "LOAD_EXTERNAL_TRANSFERS_COMPLETED":
      return payload.records
  }
  return state
}