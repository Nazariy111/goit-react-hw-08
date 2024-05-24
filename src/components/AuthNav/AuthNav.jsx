import css from './AuthNav.module.css'
import { NavLink } from 'react-router-dom'

const AuthNav = () => {
    return (
        <div className={css.wrapper}>
            <NavLink to="/register" className={css.menuLink}>Register</NavLink>
            <NavLink to="/login" className={css.menuLink}>Log In</NavLink>
        </div>
    )
}

export default AuthNav