const API_KEY = "a57bf0f6";
const OMDB_API_URL = "https://www.omdbapi.com/";

export const getMovie = async (movieId) => {
  try {
    const response = await fetch(
      `${OMDB_API_URL}?i=${movieId}&apikey=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch movie data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching movie data: ${error.message}`);
  }
};
