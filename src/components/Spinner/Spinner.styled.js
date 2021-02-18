import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const SpinnerStyled = styled(Loader)`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 300%);
  `;

export default SpinnerStyled;