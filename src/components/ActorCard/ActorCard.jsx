import {ContainerImageStyled, ImageStyled, NameStyled, TextStyled} from './ActorCard.styled';
import { imageURL } from 'initialValues/url';
import defaultFoto from 'images/error.jpg';

const ActorCard = ({ image, name, character }) => {
  return (
    <>
      <ContainerImageStyled>
        <ImageStyled
          src={image ? imageURL + image : defaultFoto}
          alt={name}
        />
      </ContainerImageStyled>
      <NameStyled>{name}</NameStyled>
      <TextStyled>{`Character: ${character}`}</TextStyled>
    </>
  );
};

export default ActorCard;