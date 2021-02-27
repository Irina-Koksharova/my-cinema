import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 150px;
  min-height: 40px;
  margin: 0;
  padding: 5px 25px;
  background-color: rgb(248, 100, 14);
  color: white;
  font-size: 20px;
  border: 2px solid rgb(248, 100, 14);
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.01);
  }`;

export { ButtonStyled };