const API_KEY = "3041b429930f38d42f2442bb7dbf853c";

const requests = {
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  ActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  RomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  ComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  HorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Drama: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default requests;