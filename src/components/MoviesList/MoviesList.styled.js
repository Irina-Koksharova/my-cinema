import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0px 0px;`;

const ItemStyled = styled.li`
  max-width: 320px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  
  &:last-child {
    margin-bottom: 0px;
  }`;

const LinkStyled = styled(Link)`
  display: inline-block;
  height: 100%;
  padding: 20px;`;

export { ListStyled, ItemStyled, LinkStyled };