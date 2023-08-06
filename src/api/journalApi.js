import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-demos-dc6ca-default-rtdb.firebaseio.com",
});

export default journalApi;
