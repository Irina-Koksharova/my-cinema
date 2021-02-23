import styled from 'styled-components';

const ImageContainerStyled = styled.div`
  height: 300px;
  margin-bottom: 10px`;

const ImageStyled = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain`;

const TitleContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;`;

const TitleStyled = styled.p`
  margin: 0;
  color: rgb(85, 83, 83);
  font-size: 20px;
  font-weight: 600;`;

export { ImageContainerStyled, ImageStyled, TitleContainerStyled, TitleStyled };
