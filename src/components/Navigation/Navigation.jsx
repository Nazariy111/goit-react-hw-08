
import { useSelector } from 'react-redux'
import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div>
            <nav className={css.nav}>
                <NavLink to="/" className={css.menuLink}>Home</NavLink>
                {isLoggedIn && <NavLink to="/contacts" className={css.menuLink}>Contacts</NavLink>}
                
            </nav>
        </div>
    )
}

export default Navigation