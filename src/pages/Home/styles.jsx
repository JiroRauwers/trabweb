import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;


  position: absolute;
  top: 20%;
  left: 10%;
`

export const CardsWrapper = styled.div`
  position: relative;
  width: 382px;
  height: 410px;
  filter: blur(2px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  position: absolute;
  top: 40%;
  left: 13%;
  
  & > * {
    position: absolute;
    width: 214px;
    height: 364px;
    flex: none;

    &:nth-child(3) {
      left: 168px;
      top: 20px;
    }

    &:nth-child(2) {
      left: 78px;
      top: 0px;
    }
    &:nth-child(1) {
      left: 0px;
      top: 46px;
    }
  }
`;


export const MainTitle = styled.h1`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 120%;
  
  align-self: stretch;
  
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  text-transform: uppercase;
`;

export const SubTitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 19px;
  margin: auto;
  
  color: #FFFFFF;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

export const Highlight = styled.span`
  color: #5A3434;
`;

