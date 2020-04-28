import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from "./userActionTypes";
import axios from "axios";

export const fetchRequest = () => {
  return {
    type : FETCH_USER_REQUEST
  }
}

export const fetchSuccess = users => {
  return {
    type: FETCH_USER_SUCCESS,
    payload : users
  }
}

export const fetchFailure = error => {
  return {
    type : FETCH_USER_FAILURE,
    payload : error
  }
}

export const fetchUsers = () => {
  return () => {
    dispatch(fetchRequest());
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const users = response.data;
      console.log(response.data);
      dispatch(fetchSuccess(users));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchFailure(errorMsg));
    })
  }
}