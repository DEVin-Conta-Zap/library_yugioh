import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

export const CardHeader = styled.div`
   display: flex;
   gap: 5px;
   align-items: center;

   @media(max-width: 800px) {
    justify-content: center;
  }

`;

export const CardIcon = styled.img`
  width: 90px;

  @media(max-width: 480px) {
    display: none;
  }
`;

export const CardTitle = styled.h2`
  font-size: 28px;
  color: #001427;
  font-weight: bold;

  @media(max-width: 800px) {
    display: none;
  }

`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media(max-width: 800px) {
    justify-content: center;
  }
`;

interface IPropsCardItem {
  currentColor: string;
}

export const CardItem = styled.li<IPropsCardItem>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 8px;
  color: #FFF;
  font-weight: bold;
  text-align: center;
  background-color: ${(props) => props.currentColor};

  &:hover {
    background: #DDD;
  }

  @media(max-width: 480px) {
    width: 100%;
    height: 50px;
    font-size: 20px;
  }

`;

export const CardItemTitle = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;



