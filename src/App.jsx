import {useEffect} from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import ContactForm from './components/ContactForm/ContactForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from './redux/contactsOps';
import { selectError, selectIsLoading } from './redux/contactsSlice'


function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {dispatch(fetchContacts())}, [dispatch]);

  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>.Please, wait. Loading contacts...</b>}
      {error && ( <b> Ooops! We have some problem...</b>)}
      <ContactList />
    </div>
  )
}

export default App
