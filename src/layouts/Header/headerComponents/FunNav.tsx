import {NavLink} from 'react-router-dom';
import '../Header.css';

const FunNav = () => {
    return (
        <nav className='mt-5 mb-2'>
            <NavLink to='/'>
                <span>Home</span>
            </NavLink>
            <NavLink to='/airB'>
            <span>Air B&B</span>            
            </NavLink>
            <NavLink to='/chill'>
                <span>Chilling</span>             
            </NavLink>
            <NavLink to='/trip'>
                <span>Trip planning</span>                         
            </NavLink>
            <NavLink to='/feedback'>
                <span>Feedback</span>            
            </NavLink>
        </nav>
    )
}

export default FunNav;