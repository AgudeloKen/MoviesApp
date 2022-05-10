import Navigation from "./Components/Nav/Navigation";
import { HashRouter, Route, Routes } from "react-router-dom";
import FPage from "./Components/PrincipalPage/FPage";
import { useState } from "react";
import axios from "axios";

function App() {
  const [poster, setPoster] = useState("/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg");
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [Searched, setSearched] = useState([]);
  const [status, setStatus] = useState("movies");
  const [movie, setMovie] = useState([]);
  const [headerOff, setHeaderOff] = useState(true);
  const Search = `https://api.themoviedb.org/3/search/movie?&api_key=6372211805eabf5c4f103d311ca51c1c&query=`;
  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      axios
        .get(Search + input)
        .then((res) => {
          let searched = res.data.results;
          setSearched(searched);
          setError(false);
          setStatus("searched");
        })
        .catch((e) => {
          if (e.name === "AxiosError") {
            setError(true);
          }
        });
      setInput("");
    } else {
      setInput("Write here!");
    }
    setPoster("/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg");
    setMovie([]);
    setHeaderOff(true);
  };
  const restartSearch = () => {
    setSearched([]);
    setStatus("movies");
    setPoster("/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg");
    setMovie([]);
    setHeaderOff(true);
  };
  const Tvseries = () => {
    setSearched([]);
    setStatus("TV");
    setPoster("/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg");
    setMovie([]);
    setHeaderOff(true);
  };
  return (
    <div>
      <HashRouter>
        <Navigation
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          input={input}
          restartSearch={restartSearch}
          Tvseries={Tvseries}
        />
        <Routes>
          <Route
            path="/"
            element={
              <FPage
                setError={setError}
                error={error}
                Searched={Searched}
                status={status}
                setStatus={setStatus}
                poster={poster}
                setPoster={setPoster}
                movie={movie}
                setMovie={setMovie}
                setHeaderOff={setHeaderOff}
                headerOff={headerOff}
              />
            }
          />
          <Route
            path="/search"
            element={
              <FPage
                setError={setError}
                error={error}
                Searched={Searched}
                status={status}
                setStatus={setStatus}
                poster={poster}
                setPoster={setPoster}
                movie={movie}
                setMovie={setMovie}
                setHeaderOff={setHeaderOff}
                headerOff={headerOff}
              />
            }
          />
          <Route
            path="/series"
            element={
              <FPage
                setError={setError}
                error={error}
                Searched={Searched}
                status={status}
                setStatus={setStatus}
                poster={poster}
                setPoster={setPoster}
                movie={movie}
                setMovie={setMovie}
                setHeaderOff={setHeaderOff}
                headerOff={headerOff}
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
