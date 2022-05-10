import React from "react";
import { PostContainer, Img } from "./Movies.Styled";

const Movies = ({ poster_path, backdrop_path, CallPoster, id, title }) => {
  const Images = "https://image.tmdb.org/t/p/original";
  return (
    <PostContainer>
      <Img
        src={Images + poster_path}
        onClick={() => CallPoster(backdrop_path, id)}
        alt={title}
      />
    </PostContainer>
  );
};

export default Movies;
