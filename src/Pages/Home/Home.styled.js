import styled from 'styled-components';
import homeImg from '../../images/HomePage.jpg';
import { NavLink } from 'react-router-dom';

export const Wraper = styled.div`
  background-image: url(${homeImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
`;

export const Link = styled(NavLink)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  margin-bottom: 5px;
  font-size: 40px;
  color: white;
  text-decoration: none;
  padding: 24px;
  font-weight: bold;

  &.active {
    color: yellow;
  }
`;
