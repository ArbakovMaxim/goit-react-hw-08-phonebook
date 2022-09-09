import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { Form } from 'formik';

export const ButtonSubmit = styled.button`
  display: block;
  margin-top: 20px;
  cursor: pointer;
  margin-left: 2em;
`;

export const TitleBlock1 = styled.h2`
  margin-left: 2em;
  margin-top: 2em;
  margin-bottom: 5px;
  font-size: ${p => p.theme.fontsSizes[3]}px;
`;

export const TitleBlock2 = styled.h2`
  margin-left: 2em;
  margin-bottom: 5px;
  font-size: ${p => p.theme.fontsSizes[3]}px;
`;

export const WrapperForm = styled.div`
  height: 460px;
`;

export const Input = styled(Field)`
  margin-bottom: 20px;
  margin-left: 2em;
`;

export const Eror = styled(ErrorMessage)`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontsSizes[0]}px;
  width: 180px;
  margin-left: 2em;
`;

export const NameForm = styled.h2`
  padding: 40px;
  font-size: bold;
  text-transform: uppercase;
  color: #414141;
`;

export const FormFormik = styled(Form)`
  width: 500px;
  height: 100%;
  position: relative;
  border-radius: 3px;
  border: 1px solid #b12816;
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: #bc3220;
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, #bc3220),
    color-stop(29%, #db4a37),
    color-stop(50%, #db4a37),
    color-stop(71%, #db4a37),
    color-stop(100%, #bc3220)
  );
  background: -webkit-linear-gradient(
    left,
    #bc3220 0%,
    #db4a37 29%,
    #db4a37 50%,
    #db4a37 71%,
    #bc3220 100%
  );
  background: linear-gradient(
    to right,
    #bc3220 0%,
    #db4a37 29%,
    #db4a37 50%,
    #db4a37 71%,
    #bc3220 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bc3220', endColorstr='#bc3220', GradientType=1 );
`;
