import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?api_key=3041b429930f38d42f2442bb7dbf853c&with_networks=213"
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

    function truncate(str,n){
        return str?.length >n ? str.substr(0,n-1) + "..." : str;
    }

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
    </div>
  );
}

export default Banner;
