import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar />  {/* Navbar stays visible on all pages */}
            <Outlet />   {/* Pages will be rendered here */}
        </div>
    );
};

export default Layout;
