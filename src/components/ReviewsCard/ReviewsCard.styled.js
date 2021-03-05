import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

const { main } = breakpoints;

const SubtitleStyled = styled.h3`
 margin: 0px 0px 15px;
 font-size: 16px;
 font-weight: 600;

 @media screen and (min-width: ${main.decktop}px) {
   font-size: 20px;
 }`;

const TextStyled = styled.p`
 margin: 0px 0px 10px;
 font-size: 14px;
 line-height: 1.7;
 letter-spacing: 0.4px;

 @media screen and (min-width: ${main.decktop}px) {
   font-size: 16px;
 }`;

export {SubtitleStyled, TextStyled}