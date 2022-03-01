import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

export const CardHeader = styled.div`
   display: flex;
   gap: 5px;
   align-items: center;
`;

export const CardIcon = styled.img`
  width: 50px;
`;

export const CardTitle = styled.h2`
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
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
`;

export const CardItemTitle = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;



