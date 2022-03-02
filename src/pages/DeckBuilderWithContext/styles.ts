import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 40px auto;
  
  display: flex;
  border: 1px solid #142D45;
  padding: 10px;

`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  gap: 5px;
`;

export const Input = styled.input`
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  img {
    width: 100px;
  }
`;

export const RightContainer = styled.div`
   display: flex;
  padding: 10px;
  flex-basis: 50%;
  flex-direction: column;

  img {
    width: 70px;
  }
`;

export const MainDeck = styled.div`
  
`;

export const DeckTitle = styled.span`
  
`;

export const ExtraDeck = styled.div`
  
`;