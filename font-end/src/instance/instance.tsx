import axios from "axios";
var user: any = {};
if (localStorage.getItem("user")) {
  const sonUser = localStorage.getItem("user");
  user = JSON.parse(sonUser ? sonUser : "");
} else {
  user = {};
}
console.log(user);

const accessToken = user.accessToken;

const instance = axios.create({
  baseURL: "https://database-bay.vercel.app/",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default instance;
