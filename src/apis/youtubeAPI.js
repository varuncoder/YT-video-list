import axios from "axios";
const KEY = "AIzaSyCmIpqW4WlUlbw_Mshm0B3n6cfatNaAP5E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
