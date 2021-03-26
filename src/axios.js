import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/socialmonkey-79747/us-central1/api",
});

// replace the baseURL with the URL you can get from the firebase function when you upgrade the firebase plan with blaze plan

export default instance;
