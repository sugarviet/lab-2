import {useContext, useEffect} from 'react'
import { ThemeContext } from './ThemeContext';
import {Link} from 'react-router-dom'
import {Navbar} from 'react-materialize';

function Navigation(props) {
    const {theme, toggle, light} = useContext(ThemeContext);

     useEffect(() => {
        props.getToggle(theme);
        console.log(theme); 
    })

    return ( 
        <div>
            <nav style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
                <ul className='nav-list'>
                    <Link to={'/'}>
                    <li className='nav-item active' style={{color: theme.color}}>
                        Home
                    </li>
                    </Link>
                    <Link to={'/news'}>
                    <li className='nav-item'style={{color: theme.color}}>
                        News
                    </li>
                    </Link>
                    <Link to={'/about'}>
                    <li className='nav-item'style={{color: theme.color}}>
                        About us
                    </li>
                    </Link>
                    <Link to={'/contact'}>
                    <li className='nav-item'style={{color: theme.color}}>Contact</li>
                    </Link>
                   
                </ul>
                <ul className='buger-menu'><i class="fa-solid fa-bars"></i></ul>
                <div className="sign-in">
                    <i className="fa-solid fa-lightbulb" onClick={toggle} style={{color:theme.color, cursor: 'pointer', fontSize: '30px', marginRight: '20px', transform: 'translateY(10px)'}}></i>
                    <button className="sign-in-btn film-btn">Sign in</button>
                </div>
            </nav>
        </div>
     );
}

export default Navigation;