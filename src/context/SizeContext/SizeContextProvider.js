import { useState, useEffect } from 'react';
import sizeContext from './context';

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
    
    const providerValue = () => {
      return { width };
    };
    
    return (
        <sizeContext.Provider value={providerValue()}>
            {children}
        </sizeContext.Provider>
    );
};

export default SizeProvider;