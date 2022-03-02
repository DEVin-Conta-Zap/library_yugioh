import styled from "styled-components";
import {BREAKPOINTS} from '../../utils/breakpoints';

export const Container = styled.div`
  background-color: #001427;
  min-height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;

  @media(max-width: ${BREAKPOINTS.MEDIUM}) {
    flex-direction: column;
    gap: 20px;
  }
  
`;

export const LogoName = styled.h1`
  color: #FFF;
  font-size: 24px;
  font-weight: bold;


  @media(max-width: ${BREAKPOINTS.SMALL}) {
    font-size: 28px;
  }

`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;

  @media(max-width: ${BREAKPOINTS.SMALL}) {
    flex-direction: column;
  }
`;

export const MenuOption = styled.li`
 color: #FFF;
 font-size: 18px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
  }


  @media(max-width: ${BREAKPOINTS.SMALL}) {
    font-size: 24px;
  }
  
`;