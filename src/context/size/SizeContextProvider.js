import { useState, useEffect, createContext  } from 'react';

const sizeContext = createContext()

const SizeProvider = ({ children }) => {
  const [width, setWidth] = useState(() => window.innerWidth);
        
  useEffect(() => {
    const handleSubscribe = () => {
      setWidth(window.innerWidth)
    }
    const onSubscribe = () => window.addEventListener('resize', handleSubscribe)
    const offSubscribe = () => window.removeEventListener('resize', handleSubscribe)
    onSubscribe()
    return () => offSubscribe()
  }, [])
      
  const value = { width, setWidth }
      
  return <sizeContext.Provider value={value}>{children}</sizeContext.Provider>;
};
  
export {sizeContext, SizeProvider};