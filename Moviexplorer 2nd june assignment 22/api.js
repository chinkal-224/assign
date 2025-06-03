const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchUpcomingMovies(page = 1) {
  const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);
  if (!res.ok) {
    throw new Error("Failed to fetch upcoming movies");
  }
  return res.json();
}
