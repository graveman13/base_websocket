import userApi from "../../api/user";
import { getAllUsersAction } from '../actions/actionsUser'

export const getAllUserThunk =  () => {
  return (dispatch) => {
    const users = userApi.getAllUsersApi();
    dispatch(getAllUsersAction({ users }));
  }
}