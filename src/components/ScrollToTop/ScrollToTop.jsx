import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { scrollTo } from 'services/scroll';
    
const ScrollToTop = ({ children, location: { pathname } }) => {
    useEffect(() => {
        scrollTo();
    }, [pathname]);
    
    return children || null;
};
        
export default withRouter(ScrollToTop);