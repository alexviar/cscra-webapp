import axios from "axios";
import apiClient from "../../../commons/services/apiClient"

export const Users = {
  loadAll: (page: {
    current: number,
    size: number
  }, filter: {
    username?: string,
    active?: number,
    externalId?: number
  })=>{
    return apiClient.get('/users', {
      params: {
        page,
        filter
      }
    })
    .catch(e=>{
      console.error("Error message", e.message, e.code, e.response)
      throw e
    })
  }
}