import styled from "styled-components";

export const HeaderCon = styled.header`
  width: 100%;
  height: 100vh;
  background: ${(props) => (props.error ? "red" : `url(${props.bg})`)};
  background: ${(props) => (props.noposter ? `#010101` : ``)};
  background-size: 100%;
  background-position: top right;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background: transparent;
    background: ${(props) =>
      props.error
        ? ""
        : `radial-gradient(
      circle at right,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      black,
      black,
      black,
      black
    )`};
    position: absolute;
    left: 0%;
    z-index: 1;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      black,
      transparent,
      transparent,
      transparent,
      black
    );
    backdrop-filter: blur(3px) grayscale(40%) brightness(60%);
    position: absolute;
    z-index: 1;
  }
  @media (max-width: 1020px) {
    background-size: 150%;
  }
  @media (max-width: 980px) {
    background-size: 200%;
    &:before {
      background: linear-gradient(
        right black,
        transparent,
        transparent,
        transparent,
        black
      );
    }
  }
  @media (max-width: 775px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 85vw;
    margin-left: auto;
  }
  @media (max-width: 580px) {
    width: 79vw;
  }
  @media (max-width: 490px) {
    width: 76vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin-left: auto;
    background-position-y: center;
    background-position-x: center;
    background-size: 500%;
    &:after {
      content: "";
    }
  }
  @media (max-width: 390px) {
    width: 72vw;
  }
`;
export const HeaderH = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 99;
  margin-left: auto;
  text-align: center;
  animation: sliceDown 1s ease;
  @media (max-width: 775px) {
    width: 90%;
  }
  @keyframes sliceDown {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
    }
  }
`;
export const HeaderH2 = styled.h2`
  font-size: 36px;
`;
export const HeaderP = styled.p`
  font-size: 32px;
  @media (max-width: 950px) {
    font-size: 25px;
  }
`;
export const PostContainer = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  margin: 0 auto;
  z-index: 10000;
  position: absolute;
  right: 50%;
  left: 20%;
  animation: slice 2s ease;
  @media (max-width: 775px) {
    width: 100%;
    position: static;
    margin: 20px 0;
  }
  @keyframes slice {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
    }
  }
`;
export const Img = styled.img`
  max-width: 250px;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  @media (max-width: 390px) {
    height: 270px;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
  height: 300px;
  margin-left: auto;
  margin-right: 10%;
  padding: 10px;
  z-index: 999;
  animation: slice 2s ease;

  @media (max-width: 930px) {
    margin-right: 5%;
    width: 45%;
  }
  @media (max-width: 775px) {
    margin-left: 0;
    width: 50%;
    position: static;
    margin: 0;
  }
  @media (max-width: 710px) {
    width: 60%;
  }
  @media (max-width: 490px) {
    width: 80%;
  }
`;
export const H2 = styled.h2`
  color: #eee;
  width: auto;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 32px;
  margin: 10px 0;
  @media (max-width: 930px) {
    margin: 10px 0;
    font-size: 28px;
  }
  @media (max-width: 710px) {
    margin: 5px 0;
    font-size: 24px;
  }
  @media (max-width: 490px) {
    font-size: 19px;
  }
  @media (max-width: 390px) {
    font-size: 17px;
    margin-bottom: 10px;
  }
`;
export const H2E = styled.h2`
  font-size: 35px;
  color: #fff;
  width: auto;
  z-index: 99;
`;
export const P = styled.p`
  color: #fff;
  font-size: 18px;
  @media (max-width: 930px) {
    font-size: 18px;
  }
  @media (max-width: 775px) {
    font-size: 17px;
  }
  @media (max-width: 490px) {
    font-size: 15px;
  }
  @media (max-width: 390px) {
    margin: 0;
  }
`;
export const Button = styled.a`
  padding: 15px 20px;
  background: transparent;
  color: #eee;
  border: 2px solid #fff;
  margin-top: auto;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  @media (max-width: 930px) {
    margin: 0;
  }
  @media (max-width: 390px) {
    margin-top: 15px;
  }
`;
