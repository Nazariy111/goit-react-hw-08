
import css from "./Layout.module.css";
import AppBar from '../AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

const Layout = ({children}) => {
    return (
        <div className={css.layout}>
            <AppBar />
            {children}
            <Toaster position='top-center' reverseOrder={false}/>
        </div>
    )
}

export default Layout