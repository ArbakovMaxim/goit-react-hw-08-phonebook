import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WraperImg = styled.div`
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Btn = styled(NavLink)`
  background-color: blue;
  color: white;
  text-decoration: none;
  &:hover {
    color: green;
    background-color: orange;
  }
`;
