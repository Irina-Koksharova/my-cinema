import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoints } from 'styles/variables';

const { main } = breakpoints;

const ContainerStyled = styled.section`
 @media screen and (min-width: ${main.tablet}px) {
	display: flex;
  align-items: center;
 }
`;

const ContainerImageStyled = styled.div`
 width: 270px;
 height: 350px;
 margin: 0 auto;
 padding: 10px;
 box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
 border-radius: 8px;

 @media screen and (min-width: ${main.tablet}px) {
   min-width: 300px;
   height: 450px;
   margin: 0px 50px 0px;
 }
`;

const ImageStyled = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContainerDescriptionStyled = styled.div`
  margin: 20px 0px 0px;

  @media screen and (min-width: ${main.tablet}px) {
   margin: 0;
 }
`;

const TitleStyled = styled.h2`
 margin: 0px 0px 20px;
 text-align: center;
 font-size: 20px;
 font-weight: 600;

 @media screen and (min-width: ${main.decktop}px) {
   font-size: 24px;
 }
`;

const SubTitleStyled = styled.h3`
 margin: 0px 0px 15px;
 font-size: 16px;
 font-weight: 600;

 @media screen and (min-width: ${main.decktop}px) {
   font-size: 20px;
 }  
`;

const TextStyled = styled.p`
 margin: 0px 0px 10px;
 font-size: 14px;
 line-height: 1.7;
 letter-spacing: 0.4px;

 @media screen and (min-width: ${main.decktop}px) {
   font-size: 16px;
 } 
`;

const ListStyled = styled.ul`
 display: flex;
`;

const ItemStyled = styled.li`
margin-right: 10px;
  
  &:last-child {
    margin-right: 0;
}
`;

const LinkStyled = styled(NavLink)`
 display: inline-block;
 min-width: 70px;
 padding: 8px;
 color: white;
 font-size: 14px;
 text-align: center;
 text-transform: capitalize;
 background-color: rgb(248, 100, 14);
 border-radius: 8px;
  
  &:hover {
    transform: scale(1.02);
  }
    
  &.${(props) => props.activeClassName} {
    transform: scale(1.02);
  }

 @media screen and (min-width: ${main.decktop}px) {
   min-width: 100px;
   font-size: 16px;
 }
`;

LinkStyled.defaultProps = {
    activeClassName: 'active',
};

export {
    ContainerStyled,
    ContainerImageStyled,
    ImageStyled,
    ContainerDescriptionStyled,
    TitleStyled,
    SubTitleStyled,
    TextStyled,
    ListStyled,
    ItemStyled,
    LinkStyled
};