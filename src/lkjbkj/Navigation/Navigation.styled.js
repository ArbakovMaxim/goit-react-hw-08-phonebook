import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav``;

export const Link = styled(NavLink)`
  margin: 0;
  margin-bottom: 5px;
  font-size: ${p => p.theme.fontsSizes[3]}px;
  color: white;
  opacity: 0.4;
  transition: all 0.5s ease-in-out;
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: yellow;
  }
`;
