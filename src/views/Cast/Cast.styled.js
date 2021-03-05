import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

const { main, secondary } = breakpoints;

const ContainerStyled = styled.section`
  margin: 20px 0px 0px;
`;

const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  `;

const ListItemStyled = styled.li`
  width: calc((100% - 20px) / 2);
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  @media screen and (max-width: ${secondary.tablet}px) {
	 &:nth-child(2n + 2) {
    margin-right: 0px;
   } 
  }

  @media screen and (min-width: ${main.tablet}px) and (max-width: ${secondary.decktop}px) {
		width: calc((100% - 60px) / 4);
    padding: 20px;
    &:nth-child(4n + 4) {
      margin-right: 0px;
    }
  }

   @media screen and (min-width: ${main.decktop}px) {
		width: calc((100% - 80px) / 5);
    padding: 20px;
    &:nth-child(5n + 5) {
      margin-right: 0px;
    }  
	}
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

const titleStyle = {
    marginBottom: '15px',
    fontSize: '20px',
    fontWeight: '600',
    textTransform: 'capitalize'
}

const buttonStyle = {
  minWidth: '100px',
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

export { ContainerStyled, ListStyled, ListItemStyled, ButtonStyled, titleStyle, buttonStyle }
