import { useState, createContext } from 'react';

const menuContext = createContext()

const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
        
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
      
  const value = { isOpen, toggleMenu }
      
  return <menuContext.Provider value={value}>{children}</menuContext.Provider>;
};
  
export { menuContext, MenuProvider };
  

