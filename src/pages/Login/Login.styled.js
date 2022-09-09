import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const ButtonSubmit = styled.button`
  background-color: #1161ed;
  cursor: pointer;
  color: #fff;
  width: 20%;
  padding: 10px 20px;
  display: block;
  height: 39px;
  border-radius: 20px;
  margin-top: 30px;
  transition: all 0.5s ease-in-out;
  border: none;
  text-transform: uppercase;
`;

export const TitleBlock = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  font-size: ${p => p.theme.fontsSizes[3]}px;
  color: white;
  opacity: 0.4;
  transition: all 0.5s ease-in-out;
`;

export const WrapperForm = styled.div`
  position: relative;
  height: 100%;
  margin: auto;
  padding: 20px 20px;
  background: url(https://picsum.photos/id/1004/5616/3744) no-repeat center
    center #505050;
  background-size: cover;
  box-shadow: 0px 30px 60px -5px #000;
`;

export const Input = styled(Field)`
  color: white;
  border: none;
  width: 50%;
  padding: 10px 20px;
  display: block;
  height: 15px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0);
  overflow: hidden;
  margin-top: 15px;
  transition: all 0.5s ease-in-out;

  &:focus {
    outline: 0;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    background: rgba(0, 0, 0, 0);
    opacity: 0.6;
  }
`;

export const Eror = styled(ErrorMessage)`
  color: ${p => p.theme.colors.red};
  font-size: ${p => p.theme.fontsSizes[0]}px;
  width: 180px;
`;
