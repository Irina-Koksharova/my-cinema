import PropTypes from 'prop-types';
import {
  ContainerImageStyled,
  ImageStyled,
  NameStyled,
  TextStyled
} from './ActorCard.styled';
import { imageURL } from 'initialValues/url';
import defaultFoto from 'images/error.jpg';

const ActorCard = ({ image = null, name, character }) => {
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

ActorCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};

export default ActorCard;