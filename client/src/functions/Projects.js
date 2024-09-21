import axios from "axios";
import { backendUrl as URL } from "../BackendUrl";

export const getProjectNameList = async () => {
  try {
    const api_password = process.env.REACT_APP_API_PASSWORD;
    const res = await axios.get(`${URL}projects/titles`, {
      headers: {
        password: api_password,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
