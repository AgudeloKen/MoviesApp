import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  width: 82%;
  padding: 20px;
  height: auto;
  margin-left: 15px;
  justify-content: center;
  gap: 10px;
  @media (max-width: 645px) {
    justify-content: center;
  }
`;
export const PostContainer = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  margin: 0 auto;
`;
export const MoviesCon = styled.div`
  display: flex;
  flex-direction: column;
  background: #111;
  height: auto;
  align-items: center;
  width: 82%;
  margin-left: auto;

  @media (max-width: 645px) {
    z-index: -1;
    justify-content: center;
  }
  @media (max-width: 445px) {
    width: 75%;
    z-index: -1;
    justify-content: center;
  }
`;
export const H1 = styled.h1`
  background: #111;
  width: 100%;
  font-size: 32px;
  color: #ddd;
  padding: 10px 0;
  text-align: center;
  @media (max-width: 630px) {
    margin-left: 0;
    text-align: center;
  }
  @media (max-width: 400px) {
    font-size: 28px;
  }
  @media (max-width: 350px) {
    font-size: 21px;
  }
`;
export const H2E = styled.h2`
  font-size: 35px;
  color: #fff;
  width: auto;
  z-index: 99;
`;
export const Img = styled.img`
  max-width: 250px;
  width: 200px;
  height: 300px;
  cursor: pointer;
  border-radius: 5px;
`;
