import axios from "axios";

const charactersClient = axios.create({
  baseURL: `${process.env.RICK_AND_MORTY_API_URL || process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`,
});

export default charactersClient;
