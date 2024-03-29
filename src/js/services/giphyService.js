import customFetch from "../utils/customFetch.js";
import { SetDataLocalStorage } from "../utils/localStorage.js";

// Set and get the infor from the API
const initTrending = async () => {
  // Set the key for the search
  const APIKEY = "VoyMtUR5a3aeKmGKj01JptIltKYBlN0D";

  let urlTrend = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=50`;
  try {
    const response = await customFetch(urlTrend);
    const gifty = response.data.map((gif) => ({
      url: gif.images.original.url,
      title: gif.title,
      id: gif.id,
    }));
    SetDataLocalStorage("trendingList", gifty);
  } catch (error) {
    throw error;
  }
};

export default initTrending;
