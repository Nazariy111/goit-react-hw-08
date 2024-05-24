import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox"
import ContactList from "../../components/ContactList/ContactList"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { selectIsLoading } from "../../redux/contacts/selectors"
import { selectError } from "../../redux/contacts/selectors"
import { fetchContacts } from "../../redux/contacts/operations"
import css from './ContactsPage.module.css';

const ContactsPage = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => { dispatch(fetchContacts()) }, [dispatch]);
    
    return (
        <div className={css.wrapper}>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {isLoading && !error && <b>.Please, wait. Loading contacts...</b>}
            {error && ( <b> Ooops! We have some problem...</b>)}
            <ContactList />
        </div>
    )  
}

export default ContactsPage