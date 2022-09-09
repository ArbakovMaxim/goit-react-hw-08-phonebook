import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  position: relative;
  top: 200px;
  left: 35%;
  display: block;
  margin-bottom: 80px;
  width: 500px;
  height: 360px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const BtnClose = styled.button`
  position: absolute;
  border: none;
  padding: 0;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const Img = styled.img`
  height: 24px;
  width: 24px;
`;
