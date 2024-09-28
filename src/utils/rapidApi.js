import axios from "axios";

const API_KEY = "9fdb7ca66emsh870c89411783a6ep16a5a7jsnc0b7bdae5bfd";
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
