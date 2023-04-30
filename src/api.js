import axios from "axios";

const searchImages = async (term) => {
  const accesKey = "u5lU5oJUqi49JmxwOBc7hryiFluW6hYb48tAnWPY3SI";
  const URL = "https://api.unsplash.com/search/photos";
  const response = await axios.get(URL, {
    headers: {
      Authorization: "Client-ID " + accesKey,
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;