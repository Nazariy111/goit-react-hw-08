
import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className>
            <nav className={css.nav}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </nav>
        </div>
    )
}

export default Navigation