import { useState } from 'react';
import menuContext from './context';

const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
    
  const providerValue = () => {
    return { isOpen, toggleMenu };
  };
      
    return (
        <menuContext.Provider value={providerValue()}>
            {children}
        </menuContext.Provider>
    );
};

export default MenuProvider;