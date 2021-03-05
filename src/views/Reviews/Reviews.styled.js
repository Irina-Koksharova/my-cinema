import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

const { main, secondary } = breakpoints;

const ContainerStyled = styled.section`
  margin: 20px 0px 0px;
`;

const ButtonStyled = styled.div`
position: fixed;
bottom: 55px;
right: 25px;
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background: white;
cursor: pointer;

 @media screen and (min-width: ${main.tablet}px) {
    bottom: 40px;
 }
`;

const ListStyled = styled.ul`
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 23;
  -webkit-box-orient: vertical;`;

const titleStyle = {
    marginBottom: '15px',
    fontSize: '20px',
    fontWeight: '600',
    textTransform: 'capitalize'
}

const buttonStyle = {
  minWidth: '100px',
  marginBottom: '10px',
  padding: '10px',
  color: 'rgb(248, 100, 14)',
  fontSize: '15px',
  fontWeight: '600',
  fontStyle: 'italic',
  textAlign: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
}

export { ContainerStyled, ButtonStyled, ListStyled, titleStyle, buttonStyle }