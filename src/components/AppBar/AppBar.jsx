import { useEffect, useRef, useContext } from 'react';
import { MenuStyled, Navbar } from './AppBar.styled';
import menuContext from 'context/MenuContext/context';
import MenuButton from 'components/MenuButton';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

const AppBar = ({ children }) => {
    const node = useRef();
    const { isOpen, toggleMenu } = useContext(menuContext);

    useOnClickOutside(node, () => {
    if (isOpen) {
      toggleMenu();
    }
  });
    
    return (
        <header ref={node}>
            <Navbar>
                <MenuButton />
                <h1>Website</h1>
            </Navbar>
            <MenuStyled open={isOpen}>{children}</MenuStyled>
        </header>
    )   
}

export default AppBar;