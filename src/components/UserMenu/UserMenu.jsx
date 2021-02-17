import { useEffect, useRef, useContext } from 'react';
import { GrClose } from 'react-icons/gr';
import { UserMenuStyled } from './UserMenu.styled';
import context from 'context/MenuContext/context';
import IconButton from 'components/IconButton';

const UserMenu = () => {
  const elRef = useRef();
  const { isOpen, toggleMenu } = useContext(context);
  
  useEffect(() => {
    const listener = e => {
      if (!elRef.current || elRef.current.contains(e.target)) {
        return;
      }
      if (isOpen) toggleMenu();      
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [isOpen, toggleMenu]);
      
    return (
      <UserMenuStyled open={isOpen} ref={elRef}>
        <IconButton
          aria-label='Закрыть меню'
          onClick={toggleMenu}
        >
          <GrClose size={'2em'}/>
        </IconButton>
      </UserMenuStyled>      
  )   
}
    
export default UserMenu;