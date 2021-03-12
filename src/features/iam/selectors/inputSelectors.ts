import { IamModuleAwareState } from "../reducers";

export const getUsers = (state: IamModuleAwareState) => state.iam.entities.users 
export const getUsersPagination = (state: IamModuleAwareState) => state.iam.ui.usersPagination 
export const getUsersFilter = (state: IamModuleAwareState) => state.iam.ui.usersFilter