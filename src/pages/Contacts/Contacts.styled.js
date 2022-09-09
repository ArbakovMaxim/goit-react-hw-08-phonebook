import styled from 'styled-components';
import book from '../../images/book.jpg';

export const ContWrapper = styled.div``;

export const ContList = styled.ul``;

export const ContItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const BtnAddContact = styled.button`
  position: absolute;
  bottom: 50px;
  right: 50px;
  font-family: 'Montserrat';
  font-size: 21px;
  font-weight: bold;
  color: #ecd600 !important;
  cursor: pointer;
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

export const WraperLoading = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20;
`;

export const WraperPage = styled.div`
  background-image: url(${book});
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  width: 100%;
`;
