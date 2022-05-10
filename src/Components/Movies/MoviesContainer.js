import React from "react";
import { v4 } from "uuid";
import Movies from "./Movies";
import { Container, H1, MoviesCon, H2E } from "./Movies.Styled";

const MoviesContainer = ({ CallPoster, movies, error, title }) => {
  return (
    <>
      {error ? (
        <MoviesCon>
          <H2E>Error</H2E>
        </MoviesCon>
      ) : (
        <MoviesCon>
          <H1>{title}</H1>
          <Container>
            {movies.length > 0 &&
              movies.map((e) => (
                <Movies key={v4()} {...e} CallPoster={CallPoster} />
              ))}
          </Container>
        </MoviesCon>
      )}
    </>
  );
};

export default MoviesContainer;
