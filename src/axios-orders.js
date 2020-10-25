import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-90cef.firebaseio.com/",
});

export default instance;
