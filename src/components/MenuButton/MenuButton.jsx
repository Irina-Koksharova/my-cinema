import { useContext } from 'react';
import {MenuButtonStyled, BarStyled} from './MenuButton.styled';
import menuContext from 'context/MenuContext/context';

const MenuButton = () => {
    const { isOpen, toggleMenu } = useContext(menuContext);

    return (
        <MenuButtonStyled
            className={isOpen ? 'active' : ''}
            aria-label="Открыть меню"
            onClick={toggleMenu}
        >
            <BarStyled />
            <BarStyled />
            <BarStyled />
        </MenuButtonStyled>
    );
}

export default MenuButton;