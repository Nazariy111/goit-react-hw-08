import React from 'react'
import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className>
            <nav className={css.nav}>
                <NavLink className to="/">Home</NavLink>
                <NavLink className to="/contacts">Contacts</NavLink>
            </nav>
        </div>
    )
}

export default Navigation