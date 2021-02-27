import styled from 'styled-components';

const FormStyled = styled.form`
 position: relative;
 margin-left: auto;
 margin-right: auto;
 width: 225px;
`;

const LabelStyled = styled.label`
  display: block;
  height: 30px;`;

const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px 30px 8px 8px;
  color: rgb(85, 83, 83);
  font-size: 16px;
  outline: none;
  border: 2px solid rgb(248, 100, 14);
  border-radius: 8px;
  
  &:focus {
    transform: scale(1.01);
  }`;

const ContainerButtonStyled = styled.div`
  position: absolute;
  top: -15%;
  left: 83%;
  width: 20px;
  height: 20px`;

export { FormStyled, LabelStyled, InputStyled, ContainerButtonStyled };