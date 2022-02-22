import userApi from "../../api/user";
import { getAllUsersAction } from '../actions/actionsUser'

export const getAllUserThunk = () => {
  return  (dispatch) => {
    const users =  userApi.getAllUsersApi();
    console.log(users)
    dispatch(getAllUsersAction({ users }));
  }
}