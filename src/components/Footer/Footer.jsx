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

export default Footer;