import styled from "styled-components";
import Imagem from "../../assets/acoes.jpg";

export const Body = styled.div`
  background: url(${Imagem}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div.container {
    background: #bdbaba;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 408px;
    height: auto;
    box-shadow: 2px 2px 2px 1px rgb(0 0 0 /20%);
    border-radius: 50px;

    h1 {
      flex: 0.5;
      margin: 0 auto;
      font-family: "Aclonica", sans-serif;
      font-weight: 400;
      font-size: 50px;
    }

    input {
      width: 100%;
      height: 38px;
      border-radius: 5px;
      outline: none;
      margin-bottom: 10px;
      border: none;
      padding: 10px;
      font-size: 16px;
    }

    label {
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 400;
    }

    form {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: stretch;
    }

    .container-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      button {
        width: 230px;
        background-color: #0d8046;
        color: #fff;
        font-size: 25px;
        font-weight: 300;
        border-radius: 20px;
        border: none;
        margin-top: 20px;
        font-family: "Kalam", cursive;
        padding: 10px;
      }

      p {
        margin-top: 10px;
        font-family: "Inter", sans-serif;
        font-size: 16px;
        font-weight: 400;
      }

      a {
        margin-left: 5px;
      }
    }
  }
`;
