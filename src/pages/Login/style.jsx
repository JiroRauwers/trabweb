import styled from "styled-components";
import email from "../../assets/img/email.png"
import pass from "../../assets/img/hide.png"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`;

export const Box = styled.div`
    * {color: #000; }
  
    background: white;
    padding: 55px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    min-width: 380px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 7px;

    h1 {
        font-family: 'Roboto';
        font-weight: 600;
        font-size: 32px;
    }

    input {
        width: 100%;
        border-radius: 7px;
        outline: 0;
        border: 2px solid gray;
        font-family: 'Roboto';
        font-weight: 500;
        padding: 7px 0px 7px 30px;
        background-repeat: no-repeat;
        background-position: 10px;
        background-size: 15px;
    }

    input[type=email]{
        background-image: url(${email});
    }

    input[type=password]{
        background-image: url(${pass});
    }

    .cadastrar{
      cursor: pointer;
      
        width: 100%;
        padding: 5px 10px;
        background-color: transparent;
        color: #ff89f0;
        border: 2px solid #ff89f0;
        border-radius: 7px;
        font-size: 16px;
        font-family: 'Roboto';
        font-weight: 500;
    }

    .logar{
        cursor:pointer;
      
        width: 100%;
        padding: 5px 10px;
        background-image: linear-gradient(to right top, #ff89f0, #ff8cbe, #ffa88c, #ffd16e, #fff976);;
        color: #fff;
        border: none;
        border-radius: 7px;
        font-size: 16px;
        font-family: 'Roboto';
        font-weight: 500;
    }
`