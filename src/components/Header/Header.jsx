import { useContext } from 'react';
import { FcMenu } from 'react-icons/fc';
import { HeaderStyled } from './Header.styled';
import { breakpoints } from 'styles/variables';
import sizeContext from 'components/SizeContext/context';
import IconButton from 'components/IconButton';
import Navigation from 'components/Navigation'

const Header = () => {
    const { width } = useContext(sizeContext);
    const { secondary } = breakpoints;

    return (
        <HeaderStyled>
            {width <= secondary.tablet
                ? <IconButton
                    aria-label='Открыть меню'
                    ><FcMenu /></IconButton>
                : <Navigation/>}
        </HeaderStyled>
    )
}
    
export default Header;