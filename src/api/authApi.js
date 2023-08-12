import axios from "axios";

const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: "AIzaSyC-hl60iGfMKApkGTvxQ7o1m1tZIDipGGk",
  },
});

export default authApi;
