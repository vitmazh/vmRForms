import axios from "axios";

const API_URL = 'http://172.16.101.186/api/';

export const loginUser = (data) => dispatch => {
  console.log(data);
  axios.post(`${API_URL}auth/login/`, data)
    .then((response) => {
      dispatch({
        type: 'LOGIN_USER',

      })
    })
    .catch((err) => {
      console.error('ОШИБКА', err)
    })

};