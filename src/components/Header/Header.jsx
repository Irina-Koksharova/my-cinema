import { useContext } from 'react';
import { FcMenu } from 'react-icons/fc';
import { HeaderStyled } from './Header.styled';
import { breakpoints } from 'styles/variables';
import { sizeContext } from 'context/size/SizeContextProvider';
import { menuContext } from 'context/menu/MenuContextProvider';
import UserMenu from 'components/UserMenu';
import Navigation from 'components/Navigation';
import IconButton from 'components/IconButton';

const Header = () => {
    const { width } = useContext(sizeContext);
    const { toggleMenu } = useContext(menuContext);
    const { secondary } = breakpoints;
        
    return (
        <HeaderStyled>
            {width <= secondary.tablet
                ? <>
                    <IconButton
                        aria-label='Открыть меню'
                        onClick={toggleMenu}
                    >
                        <FcMenu size={'2em'} />
                    </IconButton>
                    <UserMenu />
                </>
                : <Navigation />}
        </HeaderStyled>        
    )
}
                    
export default Header;