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

// Get all info about a project using a specific title
export const getProjectInfo = async (projectTitle) => {
  try {
    const api_password = process.env.REACT_APP_API_PASSWORD;
    const res = await axios.get(`${URL}projects/${projectTitle}`, {
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

// All projects and home page descriptions about them
export const projects = [
  {
    title: "Simple",
    description: "Earn points by existing",
    date: "4/25",
  },
  {
    title: "Portfolio",
    description: "The website you're looking at right now",
    date: "10/24",
  },
  {
    title: "Raft",
    description: "I had *every* user on the app following me",
    date: "7/24",
  },
  {
    title: "Subitt",
    description: "Subscribe how you want to! ",
    date: "2/24 - 4/25",
  },
  {
    title: "PLMS",
    description: "Personal Learning Modules, or Plums for short",
    date: "2/24",
  },
  {
    title: "TwitterBots",
    description: "Twitter bots from before Twitter wasn't Twitter",
    date: "10/23",
  },
];
