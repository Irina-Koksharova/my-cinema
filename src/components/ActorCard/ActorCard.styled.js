import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

const { main } = breakpoints;

const ContainerImageStyled = styled.div`
  height: 180px;`;

const ImageStyled = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;`;

const NameStyled = styled.p`
  margin: 10px 0px 0px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  
   @media screen and (min-width: ${main.tablet}px) {
	font-size: 16px;
   }`;

const TextStyled = styled.p`
  margin: 8px 0px 0px;
  text-align: center;
  font-size: 10px;
  
   @media screen and (min-width: ${main.tablet}px) {
	font-size: 14px;
   }`;

export {
  ContainerImageStyled,
  ImageStyled,
  NameStyled,
  TextStyled
}