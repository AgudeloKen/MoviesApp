import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import axios from "axios";
import MoviesContainer from "../Movies/MoviesContainer";
import { Container } from "./FPage.Styled";

const FPage = ({
  setError,
  error,
  Searched,
  status,
  setStatus,
  poster,
  setPoster,
  movie,
  setMovie,
  setHeaderOff,
  headerOff,
}) => {
  const [movies, setMovies] = useState([]);
  const [ID, setID] = useState(335787);
  const [trailer, setTrailer] = useState([]);
  const [tv, setTv] = useState([]);
  const Trailer = `https://api.themoviedb.org/3/movie/${ID}/videos?api_key=6372211805eabf5c4f103d311ca51c1c`;
  const Features = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6372211805eabf5c4f103d311ca51c1c&page-1`;
  const FeaturesTv =
    "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=6372211805eabf5c4f103d311ca51c1c&page-1";

  const CallPoster = (image, id) => {
    if (image === null) {
      setPoster(null);
    } else {
      setPoster(image);
    }
    switch (status) {
      case "movies":
        let movie = movies.filter((item) => item.id === id);
        setMovie(movie);
        break;
      case "searched":
        let search = Searched.filter((item) => item.id === id);
        setMovie(search);
        break;
      case "TV":
        let tV = tv.filter((item) => item.id === id);
        setMovie(tV);
        break;
      default:
        break;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setID(id);
    setHeaderOff(false);
  };
  useEffect(() => {
    axios
      .get(Trailer)
      .then((res) => {
        let trailer = res.data.results;
        let end = trailer.find((element) => element.type === "Trailer");

        if (end) {
          setTrailer(end);
        } else {
          setTrailer("na");
        }
        setError(false);
      })
      .catch((e) => {
        if (e.name === "AxiosError") {
          setTrailer("na");
        }
      });
  }, [Trailer, movie, setError]);

  useEffect(() => {
    axios
      .get(Features)
      .then((res) => {
        let movies = res.data.results;
        setMovies(movies);
        setError(false);
      })
      .catch((e) => {
        if (e.name === "AxiosError") {
          setError(true);
        }
      });
  }, [Features, setError]);

  useEffect(() => {
    axios
      .get(FeaturesTv)
      .then((res) => {
        let tv = res.data.results;
        setTv(tv);
      })
      .catch((e) => {
        if (e.name === "AxiosError") {
          setError(true);
        }
      });
  }, [FeaturesTv, setError, setStatus]);

  switch (status) {
    case "movies":
      return (
        <Container>
          <Header
            poster={poster}
            movie={movie}
            trailer={trailer}
            error={error}
            headerOff={headerOff}
          />

          <MoviesContainer
            CallPoster={CallPoster}
            movies={movies}
            error={error}
            title="Featured Movies"
          />
        </Container>
      );
    case "searched":
      return (
        <Container>
          <Header
            poster={poster}
            movie={movie}
            trailer={trailer}
            error={error}
            headerOff={headerOff}
          />
          <MoviesContainer
            CallPoster={CallPoster}
            movies={Searched}
            error={error}
            title="Results"
          />
        </Container>
      );
    case "TV":
      return (
        <Container>
          <Header
            poster={poster}
            movie={movie}
            trailer={trailer}
            error={error}
            headerOff={headerOff}
          />
          <MoviesContainer
            CallPoster={CallPoster}
            movies={tv}
            error={error}
            title="Featured Tv Series"
          />
        </Container>
      );
    default:
      break;
  }
};

export default FPage;
