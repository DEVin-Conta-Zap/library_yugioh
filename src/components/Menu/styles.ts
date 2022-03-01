import styled from "styled-components";

export const Container = styled.div`
  background-color: #001427;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;

export const LogoName = styled.h1`
  color: #FFF;
  font-size: 24px;
  font-weight: bold;
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

export const MenuOption = styled.li`
 color: #FFF;
 font-size: 18px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
  }
  
`;