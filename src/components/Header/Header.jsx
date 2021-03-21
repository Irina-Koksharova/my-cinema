import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { LinkStyled, HeaderStyled } from './Header.styled';
import { breakpoints } from 'styles/variables';
import { sizeContext } from 'context/size/SizeContextProvider';
import { menuContext } from 'context/menu/MenuContextProvider';
import { navigationLinks } from 'initialValues/navigationLinks';
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
        const {HOME, MOVIES} = navigationLinks
        if (location.pathname === '/') {
            setCurrentLocation(HOME)
            return currentLocation
        }
        location.pathname.includes(MOVIES)
            ? setCurrentLocation(location.pathname.slice(1, 7))
            : setCurrentLocation(location.pathname.slice(1, 3).toUpperCase())
        return currentLocation
    }, [currentLocation, location.pathname])
        
    return (
        <HeaderStyled>
            {width <= secondary.tablet
                ? <>
                    <LinkStyled
                        href='#'
                        aria-label='Link to the current page'>
                        {currentLocation}
                    </LinkStyled>
                    <IconButton
                        aria-label='Open menu'
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