import styled from 'styled-components';
import { BREAKPOINTS } from '../../utils/breakpoints';

export const Container = styled.div`
  width: 80%;
  margin: 40px auto;
  
  display: flex;
  border: 1px dashed #142D45;
  padding: 10px;

  @media(max-width: ${BREAKPOINTS.LARGE}) {
    flex-direction: column;
  }

`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  gap: 5px;
`;

export const Input = styled.input`
  width: 80%;
  outline: 0;
  border-radius: 4px;
  border: 1px solid #142D45;
  color: #142D45;
  font-weight: bold;
  height: 34px;


  @media(max-width: ${BREAKPOINTS.SMALL}) {
    width: 100%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;

  img {
    width: 100px;
  }


  @media(max-width: 800px) {
    img {
      width: 60px;
     }
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

  @media(max-width: 800px) {
    img {
      width: 40px;
     }
  }
`;

export const MainDeck = styled.div`
  
`;

export const DeckTitle = styled.span`
  color: #142D45;
  font-weight: bold;
  font-size: 18px;
`;

export const ExtraDeck = styled.div`
  
`;