// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
import {Outlet} from "react-router-dom";


const Layout = () => {
    return (
        <div >
            <Outlet />
        </div>
    )
}

export default Layout;