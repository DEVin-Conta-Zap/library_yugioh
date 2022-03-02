import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h1`
   text-align: center;
  color: #001427;
  font-size: 24px;
`;

export const CardImage = styled.img`
  width: 350px;
  flex-basis: 30%;
  object-fit: fill;
  align-self: flex-start;
`;


export const CardDetailsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const CardInfo = styled.div`
  background-color: #142D45;
  flex-basis: 60%;
  color: #FFF;
  border-radius: 8px;
  padding: 10px;

  display: flex;
  flex-direction: column;
`;

export const CardInfoHeader = styled.div`
  display: flex;
  gap: 5px;
`;

export const CardInfoBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Description = styled.span`
 text-align: justify;
`;

export const CardInfoFooter = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Button = styled.button`
  outline: 0;
  background-color: #142D45 ;
  border-color: #FFF;
  border-radius: 4px;
  color: #FFF;
  margin-top: 10px;
  width: 100px;
  align-self: center;
`;

export const Badge = styled.button`
  background-color: #FFF;
  border-radius: 4px;
  padding: 2px;
  color: #142D45;
  font-weight: bold;
`;

