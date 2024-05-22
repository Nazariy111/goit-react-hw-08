import React from 'react'
import css from './AuthNav.module.css'
import { NavLink } from 'react-router-dom'

const AuthNav = () => {
    return (
        <div className={css.nav}>
            <NavLink className to="/register">Register</NavLink>
            <NavLink className to="/login">Log In</NavLink>
        </div>
    )
}

export default AuthNav