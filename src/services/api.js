import axios from "axios";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODdkMGRlZDQ1MzM4NjJiZDU1OTM1MmE4YWE4YWVlZSIsIm5iZiI6MTcyOTAyODE1My40NjI1MjEsInN1YiI6IjY3MGVkZjM2NmZjMjE5NGFjMGMxZTA4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jDIzgV2jQsW662j9IR4980wtTAh8gHEczMSeDBMCgHA",
  },
};

export const fetchTrendingMovies = async () => {
  const trendingMoviesUrl = "https://api.themoviedb.org/3/trending/movie/day";
  const { data } = await axios.get(trendingMoviesUrl, options);
  return data.results;
};

export const fetchMovieById = async (movieId) => {
  const movieByIdUrl = `https://api.themoviedb.org/3/movie/${movieId}`;
  const { data } = await axios.get(movieByIdUrl, options);
  return data;
};

export const fetchMovieCastById = async (movieId) => {
  const movieCastUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const { data } = await axios.get(movieCastUrl, options);
  return data.cast;
};

export const fetchMovieReviewsById = async (movieId) => {
  const movieReviewUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const { data } = await axios.get(movieReviewUrl, options);
  return data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`;
  const { data } = await axios.get(searchMovieUrl, options);
  return data.results;
};
