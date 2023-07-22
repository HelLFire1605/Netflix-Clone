import "./App.css";
import Row from "./Row.js";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.NetflixOriginals} 
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.Trending} />
      <Row title="Top Rated" fetchUrl={requests.TopRated} />
      <Row title="Action Movies" fetchUrl={requests.ActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.RomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.ComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.HorrorMovies} />
      <Row title="Drama" fetchUrl={requests.Drama} />
    </div>
  );
}

export default App;
