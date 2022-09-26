import {useContext, useEffect} from 'react'
import { ThemeContext } from './ThemeContext';

function Navigation(props) {
    const {theme, toggle, light} = useContext(ThemeContext);

     useEffect(() => {
        props.getToggle(theme);
        console.log(theme); 
    })

    return ( 
        <div>
            <nav style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
                <ul>
                    <li><a style={{color: theme.color}} href="#" className="active">Home</a></li>
                    <li><a style={{color: theme.color}} href="#">News</a></li>
                    <li><a style={{color: theme.color}} href="#">About</a></li>
                    <li><a style={{color: theme.color}} href="#">Contact</a></li>
                </ul>
                <div className="sign-in">
                    <i className="fa-solid fa-lightbulb" onClick={toggle} style={{color:theme.color, cursor: 'pointer', fontSize: '30px', marginRight: '20px', transform: 'translateY(10px)'}}></i>
                    <button className="sign-in-btn">Sign in</button>
                </div>
            </nav>
        </div>
     );
}

export default Navigation;