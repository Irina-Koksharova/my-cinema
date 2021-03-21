import PropTypes from 'prop-types';
import { TextStyled } from './Notification.styled';

const Notification = ({ message }) => {
  return <TextStyled>{message}</TextStyled>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

export default Notification;
