import PropTypes from 'prop-types';
import { FooterStyled } from './Footer.styled';
import PaginationEl from 'components/PaginationEl';

const Footer = ({ count, page, onChange }) => {
    return (
        <FooterStyled>
            <PaginationEl
                count={count}
                page={page}
                onChange={onChange}
            />
        </FooterStyled>
    )
}

Footer.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Footer;