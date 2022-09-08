import styled from 'styled-components';

export const ContWrapper = styled.div``;

export const ContList = styled.ul``;

export const ContItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const BtnDeleteContact = styled.button`
  margin-left: 200px;
  font-family: 'Montserrat';
  font-size: 21px;
  font-weight: bold;
  color: #ecd600 !important;
  padding: 4px 5px;
  border-radius: 21px;
  border: 2px groove #5246f3;
  background: #c92977;
  background: linear-gradient(to top, #c92977, #f11f75);
  &:hover {
    color: #1644e7 !important;
    background: #d8f652;
  }
`;

export const Wraper = styled.div`
  display: flex;
`;
