import { useEffect, useRef, useContext } from 'react';
import { Transition } from 'react-transition-group';
import { GrClose } from 'react-icons/gr';
import { UserMenuStyled } from './UserMenu.styled';
import { menuContext } from 'context/menu/MenuContextProvider';
import IconButton from 'components/IconButton';

const UserMenu = ({children}) => {
  const elRef = useRef();
  const { isOpen, toggleMenu } = useContext(menuContext);
  
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
    <Transition in={isOpen} timeout={300} unmountOnExit nodeRef={elRef}>
      {(state) => (          
        <UserMenuStyled state={state} ref={elRef}>
          <IconButton
            aria-label='Закрыть меню'
            onClick={toggleMenu}
          >
            <GrClose size={'2em'} />
          </IconButton>
          {children}
        </UserMenuStyled> 
      )}
    </Transition>
  )   
}
      
export default UserMenu;