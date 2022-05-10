import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  min-height: 100vh;
  height: auto;
  position: fixed;
  width: 18vw;
  justify-content: center;
  transition: all 2s ease;
  background: #000;
  z-index: 99999;
  @media (max-width: 845px) {
    margin: 0;
    border-right: 1px solid #ddd;
    background: #000;
    width: auto;
    padding: 0 20px;
  }
`;
export const Form = styled.form`
  display: flex;
  height: auto;
  align-items: center;
`;
export const Input = styled.input`
  display: ${(props) => props.search && "block"};
  padding: 8px 6px;
  margin: 0px 5px;
  border-radius: 15px;
  border: none;
  transition: all 2s ease;
  animation: ${(props) => props.search && "animate 4s ease"};
  &:focus {
    outline: none;
  }
  @keyframes animate {
    100% {
      opacity: 1;
    }
    0% {
      opacity: 0;
    }
  }
`;
export const P = styled.p`
  font-size: 21px;
  color: #ddd;
  transition: 1s all ease;
  animation: ${(props) => props.search && "animate 4s ease"};
  &:hover {
    transform: scale(1.1);
  }
`;
export const Button = styled.button`
  background: transparent;
  border: none;
  transition: 1s all ease;
  animation: ${(props) => props.search && "animate 4s ease"};
  .min-search {
    font-size: 28px;
    color: #ddd;
    cursor: pointer;
    animation: ${(props) => props.search && "animate 4s ease"};
  }
  &:hover {
    transform: scale(1.1);
  }
`;
export const Ul = styled.ul`
  width: ${(props) => (props.search ? "300px" : "70px")};
  margin-left: ${(props) => props.search && "100%"};
  height: 240px;
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  background: #191919;
  justify-content: space-around;
  border-radius: 50px;
  border: 1px solid #eee;
  transition: all 2s ease;
  .Link {
    display: flex;
    height: auto;
    align-items: center;
    text-decoration: none;
    animation: ${(props) => props.search && "animate 4s ease"};
    .icon {
      font-size: 28px;
      color: #ddd;
      margin: 0 10px;
      transition: 1s all ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .search {
    font-size: 30px;
    color: #ddd;
    cursor: pointer;
    transition: 1s all ease;
    animation: ${(props) => props.search && "animate 4s ease"};
    &:hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 845px) {
    border: none;
    background: #000;
    padding: 10px;
    align-items: space-between;
    margin-left: 0;
    width: 100%;
    height: 100vh;
  }
  @media (max-width: 445px) {
    padding: 5px;
  }
`;
export const Li = styled.li`
  display: flex;
  height: auto;
  align-items: center;
  list-style-type: none;
  transition: all 6s ease;
  .search-close {
    font-size: 35px;
    color: #ddd;
    cursor: pointer;
    transition: 1s all ease;
    animation: ${(props) => props.search && "animate 4s ease"};

    &:hover {
      transform: scale(1.1);
    }
  }
`;
