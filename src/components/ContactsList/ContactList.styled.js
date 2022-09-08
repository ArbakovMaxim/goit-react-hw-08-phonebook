import styled from 'styled-components';
import card from '../../images/card.png';

export const ContWrapper = styled.div``;

export const ContList = styled.ul`
  display: flex;
  direction: columns;
  flex-wrap: wrap;
`;

export const ContItem = styled.li`
  background-image: url(${card});
  background-size: cover;
  height: 100px;
  width: 220px;
  background-color: green;
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

export const BtnDeleteContact = styled.button`
  width: 60px;
  margin-top: 10px;
  margin-left: 80px;
  margin-right: 80px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: #ffffff !important;
  border-radius: 21px;
  border: 2px dashed #f3c846;
  background: #ab8179;
  background: linear-gradient(to top, #ab8179, #0a5b9e);
  &:hover {
    color: #a7e716 !important;
    background: #0c0a9e;
    background: linear-gradient(to top, #0c0a9e, #713226);
  }
`;

export const Name = styled.p`
  margin-left: 48px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 15px;
`;
export const Number = styled.p`
  font-weight: bold;
  font-size: 15px;
  margin-left: 15px;
`;
