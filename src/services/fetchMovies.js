import { baseUrl } from "../config/config";

const fetchMovies = (q) => {
  const URL = `${baseUrl}t=${q}`;
  const data = fetch(URL)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log(e.message));
  return data;
};

export default fetchMovies;
