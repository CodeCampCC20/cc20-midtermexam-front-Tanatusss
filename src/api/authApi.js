import axios from "axios";

const authApi ={};
const BASE_URL = "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1"


authApi.login = (input) => {
  return axios.post(`${BASE_URL}/auth/login`,input)
}
authApi.register = (input) => {
  return axios.post(`${BASE_URL}/auth/register`,input)
}


export default authApi;