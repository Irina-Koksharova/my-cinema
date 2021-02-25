import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from 'styles/variables';

const { main } = breakpoints;

const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0px 0px;
  
   @media screen and (min-width: ${main.decktop}px) {
		justify-content: center;
  }`;

const ItemStyled = styled.li`
  max-width: 320px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  &:nth-last-child(-n + 1) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: ${main.tablet}px) {
    margin-bottom: 30px;
		&:nth-last-child(-n + 2) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: ${main.decktop}px) {
		width: calc((100% - 60px) / 3);
    margin-right: 30px;
    margin-bottom: 40px;

    &:hover {
    transform: scale(1.01);
    }

    &:nth-child(3n) {
    margin-right: 0;
  }

    &:nth-child(20n) {
    margin-right: 0;
  }
  }`;

const LinkStyled = styled(Link)`
  display: inline-block;
  height: 100%;
  padding: 20px;
  color: rgb(85, 83, 83);

   @media screen and (min-width: ${main.decktop}px) {
		&:hover {
    color: rgb(248, 100, 14);
  }
  }`;

export { ListStyled, ItemStyled, LinkStyled };