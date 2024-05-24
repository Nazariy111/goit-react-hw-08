import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/selectors';


const ContactList = () => {
    
    const visibleContacts = useSelector(selectFilteredContacts);

    return (
        <div >
            <ul className={css.contactList}>
                {visibleContacts && Array.isArray(visibleContacts) && visibleContacts.length > 0 &&
                    visibleContacts.map((contact) => { return <Contact key={contact.id} contact={contact} />; })}
            </ul>
        </div>
    )
}

export default ContactList