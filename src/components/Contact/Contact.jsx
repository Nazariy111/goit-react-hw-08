
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";


const Contact = ({ contact }) => {
    
    const dispatch = useDispatch();

    return (
        <li key={contact.id} className={css.contactItem}>
            <ul className={css.contactInfo}>
                <li>
                    <p><FaUser className={css.myIcon} />{contact.name}</p>
                </li>
                <li>
                    <p><FaPhone className={css.myIcon} />{contact.number}</p>
                </li>
            </ul>
            <button className={css.contactButton} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
    )
}

export default Contact