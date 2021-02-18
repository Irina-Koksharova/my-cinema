import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { LinkStyled, HeaderStyled } from './Header.styled';
import { breakpoints } from 'styles/variables';
import { sizeContext } from 'context/size/SizeContextProvider';
import { menuContext } from 'context/menu/MenuContextProvider';
import UserMenu from 'components/UserMenu';
import Navigation from 'components/Navigation';
import IconButton from 'components/IconButton';

const Header = () => {
    const { width } = useContext(sizeContext);
    const { toggleMenu } = useContext(menuContext);
    const location = useLocation()
    const [currentLocation, setCurrentLocation] = useState(location.pathname)
    const { secondary } = breakpoints;
    
    useEffect(() => {
        if (location.pathname === '/') {
            setCurrentLocation('home')
            return currentLocation
        }
        setCurrentLocation(location.pathname.slice(1))
        return currentLocation
    }, [currentLocation, location.pathname])
        
    return (
        <HeaderStyled>
            {width <= secondary.tablet
                ? <>
                    <LinkStyled
                        href={location.pathname}
                        aria-label='Ссылка на текущую страницу'>
                        {currentLocation}
                    </LinkStyled>
                    <IconButton
                        aria-label='Открыть меню'
                        onClick={toggleMenu}
                    >
                        <BiMenu size={'2em'} color={'rgb(85, 83, 83)'}/>
                    </IconButton>
                    <UserMenu><Navigation /></UserMenu>
                </>
                : <Navigation />}
        </HeaderStyled>        
    )
}
                    
export default Header;