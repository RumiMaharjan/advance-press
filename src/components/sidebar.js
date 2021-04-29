import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {SidebarData}

function Navbar(){
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return {
        <>
        <div className='navbar'>
        <Link to='#' className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>

        <ul className='nav-menu-item'>
        <li className= 'navbar-toggle'>

        <Link to="#" className='menu-bars'>
        <AiIcons.AiOutlineClose/>
        </Link>
        </li>
        </ul>
        </nav>
        </>
    
    }
}



//sidebarData.js

import * as FaIcons from 'react-icons/fa';


const SidebarData= [
    {
        title: 'About Us',
        path: '/about-us'
    }
    {
        title: 'Our Works',
        path: '/our-works'
    }
    {
        title: 'Contact Us',
        path: '/contact-us'
    }
]