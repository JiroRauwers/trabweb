import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;

  margin: auto;

  left: 187px;
  top: 0px;

  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;

export const TextWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  
  gap: 15px;

  width: 634px;
  height: 330px;

  *{
    width: 100%;
  }
  
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Highlight = styled.span`
  color: #5A3434;
`;
export const Title = styled.h1`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 120%;
  /* or 58px */

  text-align: center;
  text-transform: uppercase;    
`;

export const SubTitle = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 120%;

  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 65px;
  padding-top: 40px;
  
  width: 100%;
  justify-content: space-between;
  
`;

export const Separator = styled.hr`
  border: 5px solid #5A3434;
  transform: rotate(90deg);
  background: #5A3434;
  width: 68px;
  border-radius: 10px;
`;
export const Button = styled.button`
  cursor: pointer;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  gap: 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  
  height: 39px;

  background: #5A3434;
  border-radius: 5px;
`;