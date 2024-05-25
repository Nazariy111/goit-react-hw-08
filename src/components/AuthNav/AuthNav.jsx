import css from './AuthNav.module.css'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx';

const AuthNav = () => {
    const bildLinkClass = ({ isActive }) => clsx(css.menuLink, isActive && css.active);
    return (
        <div className={css.wrapper}>
            <NavLink to="/register" className={bildLinkClass}>Register</NavLink>
            <NavLink to="/login" className={bildLinkClass}>Log In</NavLink>
        </div>
    )
}

export default AuthNav