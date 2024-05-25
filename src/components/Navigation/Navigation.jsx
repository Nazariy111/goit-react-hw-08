
import { useSelector } from 'react-redux'
import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const bildLinkClass = ({ isActive }) => clsx(css.menuLink, isActive && css.active);

    return (
        <div>
            <nav className={css.nav}>
                <NavLink to="/" className={bildLinkClass}>Home</NavLink>
                {isLoggedIn && <NavLink to="/contacts" className={bildLinkClass}>Contacts</NavLink>}
                
            </nav>
        </div>
    )
}

export default Navigation