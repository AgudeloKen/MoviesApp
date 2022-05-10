import React from "react";
import {
  HeaderCon,
  PostContainer,
  Img,
  Info,
  H2,
  H2E,
  P,
  Button,
  HeaderH,
  HeaderP,
  HeaderH2,
} from "./Header.Styled";

const Header = ({ poster, movie, trailer, error, headerOff }) => {
  const background = `https://image.tmdb.org/t/p/original${poster}`;
  let noposter = false;
  if (poster === null) {
    noposter = true;
  }
  const Images = "https://image.tmdb.org/t/p/original";
  return (
    <>
      {error ? (
        <HeaderCon error={error}>
          <H2E>Error, reaload and try again.</H2E>
        </HeaderCon>
      ) : (
        <HeaderCon bg={background} noposter={noposter}>
          {headerOff ? (
            <HeaderH>
              <HeaderH2>Welcome to our site!</HeaderH2>
              <HeaderP>
                Here you can find all kinds of movies and series
              </HeaderP>
            </HeaderH>
          ) : (
            movie.length > 0 && (
              <>
                <PostContainer>
                  <Img src={Images + movie[0].poster_path} />
                </PostContainer>
                <Info>
                  <H2>{movie[0].title || movie[0].original_name}</H2>
                  <P>{movie[0].overview}</P>
                  {trailer === "na" ? (
                    <Button>Not available</Button>
                  ) : (
                    <Button
                      href={`https://www.youtube.com/watch?v=${trailer.key}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Watch Trailer
                    </Button>
                  )}
                </Info>
              </>
            )
          )}
        </HeaderCon>
      )}
    </>
  );
};

export default Header;
