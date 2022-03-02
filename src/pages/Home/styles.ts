import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;

  @media(max-width: 800px) {
    align-items: center;
    justify-content: center;
  }
`;
