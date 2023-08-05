import axios from "axios";

const userJSON =JSON.parse(localStorage.getItem("user")?? "")
const accessToken = userJSON.accessToken 


const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});

export default instance;
