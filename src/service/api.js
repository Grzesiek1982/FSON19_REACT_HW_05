import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWRhZjFhNTY0NDQzMDBiNGY4ZTJkM2Y0MWRhOWEzMyIsIm5iZiI6MTczMzU4MjE0MS4yMzUwMDAxLCJzdWIiOiI2NzU0NWQzZGFiNmNjM2E0YzhmY2FjOTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LfvmRRpjQI3IYJ37nSXlRo4wHdumiMZ79OW5OLBYuVc",
  },
});

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWRhZjFhNTY0NDQzMDBiNGY4ZTJkM2Y0MWRhOWEzMyIsIm5iZiI6MTczMzU4MjE0MS4yMzUwMDAxLCJzdWIiOiI2NzU0NWQzZGFiNmNjM2E0YzhmY2FjOTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LfvmRRpjQI3IYJ37nSXlRo4wHdumiMZ79OW5OLBYuVc",
  },
};

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

export const fetchMovies = async () => {
  const response = await axios.get(url, options);
  return response.data.results;
};

export const fetchReviews = async (movieId) => {
  const response = await api.get(`3/movie/${movieId}/reviews?language=en-US`);
  return response.data.results;
};

export const fetchCasts = async (movieId) => {
  const response = await api.get(`3/movie/${movieId}/credits?language=en-US`);
  return response.data.cast;
};

export const fetchFilmDetails = async (movieId) => {
  const response = await api.get(`3/movie/${movieId}?language=en-US`);
  return response.data;
};

export const fetchMoviesSearch = async (query, pageNumber) => {
  const response = await api.get(
    `3/search/movie?query=${query}&include_adult=false&language=en-US&page=${pageNumber}&per_page=12`
  );
  return response;
};
