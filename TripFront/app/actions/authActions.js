import axios from 'axios';
import {SIGNIN_URL, SIGNUP_URL} from '../api';
exports.loginUser = (email, password) => {
   return function(dispatch){
      return axios.post("http://10.0.2.2:3000/v1/signin", {email, password}).then((response) => {
          var {user_id, token} = response.data;
          dispatch(authUser(user_id));
      }).catch((error) => {
        console.log(error);
      })
   }
}

exports.signupUser = (email, password,phone) => {
   return function(dispatch){
    return axios.post("http://127.0.0.1:3000/v1/signup", {email, password,phone}).then((response) => {
              var {user_id, token} = response.data;
              dispatch(authUser(user_id));
          }).catch((error) => { console.log(error); })
     .then((response) => {
          var {user_id, token} = response.data;
          dispatch(authUser(user_id));
      }).catch((error) => {
          console.log(error);
      })
   }
}
authUser = (user_id) => {
   return{
     type: 'AUTH_USER',
     user_id
   }
}
exports.unauthUser = (user_id) => {
   return{
     type: 'UNAUTH_USER'
   }
}
