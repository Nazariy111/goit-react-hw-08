import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox"
import ContactList from "../../components/ContactList/ContactList"

const ContactsPage = () => {
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {/* {isLoading && !error && <b>.Please, wait. Loading contacts...</b>}
            {error && ( <b> Ooops! We have some problem...</b>)} */}
            <ContactList />
        </div>
    )  
}

export default ContactsPage