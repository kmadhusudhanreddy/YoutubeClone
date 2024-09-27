import axios from "axios";

const API_KEY = "4a851eac24msh492953c04890743p1a621ejsn2904c793998c";
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.log("error in fetching api data : ", error);
    throw error;
  }
};
