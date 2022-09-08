import styled from 'styled-components';
import heder from '../../images/headerWorld.png';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #2a363b;
  background-image: url(${heder});
  background-size: cover;
  background-repeat: no-repeat;
`;
