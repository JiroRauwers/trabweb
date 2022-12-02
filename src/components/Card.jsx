import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  gap: 15px;

  position: relative;

  background: #D9D9D9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`

const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
`

const Body = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: #000000;
`
const ReadMore_Style = styled.a`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  
  cursor: pointer;

  width: 100%;
  
  display: flex;
  justify-content: flex-end;
  text-align: right;

  color: rgba(0, 0, 0, 0.5);
`;
const ReadMore = () => <ReadMore_Style>Read More...</ReadMore_Style>



const Card = {
    Wrapper, Title,Body,ReadMore
}
export default Card