import React from 'react'
import css from "./Layout.module.css";
import AppBar from '../AppBar/AppBar';

const Layout = ({children}) => {
    return (
        <div className={css.layout}>
            <AppBar />
            {children}
        </div>
    )
}

export default Layout