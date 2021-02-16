import { useContext } from 'react';
import { HeaderStyled } from './Header.styled';
import { breakpoints } from 'styles/variables';
import sizeContext from 'context/SizeContext/context';
import AppBar from 'components/AppBar';
import Navigation from 'components/Navigation';

const Header = () => {
    const { width } = useContext(sizeContext);
    const { secondary } = breakpoints;

    return (
        <HeaderStyled>
            {width <= secondary.tablet ? <AppBar /> : <Navigation />}
        </HeaderStyled>
    )
}
            
export default Header;