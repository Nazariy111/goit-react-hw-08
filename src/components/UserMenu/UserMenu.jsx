import { useDispatch, useSelector } from 'react-redux'
import css from './UserMenu.module.css'
import { selectUser } from '../../redux/auth/selectors'
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    
    const handleLogout = () => {
        dispatch(logOut());
    }

    return (
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, { user.name}</p>
            <button type='button' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default UserMenu