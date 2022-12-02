import styled from "styled-components";


const Wrapper = styled.div`
  font-family: 'Inter';
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  gap: 37px;
  
  width: 100%;
  
  position: absolute;
  top: 0;
  left: 0;

  * {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const LogoBox = styled.div`
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 2.2rem;
  padding-right: 0;
  margin-right: -2rem;
  letter-spacing: 0.2rem;
  font-family: Inter;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 50px;
  gap: 10px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;


const ItemsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ProfileBox = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 24px;
  gap: 10px;

  border-radius: 22px;
  
  flex: none;
  order: 2;
  flex-grow: 0;

   &>*{
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     
     cursor: pointer;
     border-radius: 50%;
     background: #f1f1f1;
     &>*{
       fill: #000;
     }
   }
  &:hover {
    &>*{
      background: #5A3434;
      &>*{
        fill: #f1f1f1;
      }
    }
  }

`;

const Btn = styled.button`
  border: none;
  background: none;
  
  cursor: pointer;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  gap: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  &:hover{
    color: #5A3434;
    font-size: 20px;
    margin: -5px;
  }
  
`;



const MenuStyle = {
    Wrapper, LogoBox, ItemsBox,
    ProfileBox, Btn
}
export default MenuStyle