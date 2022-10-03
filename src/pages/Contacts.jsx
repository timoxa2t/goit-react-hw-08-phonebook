
import ContactForm from "components/ContactForm";
import ContactsList from "components/ContactsList";
import Section from "components/Section";
import FilterConstacts from "components/FilterConstacts";
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, getSavedContacts, setFilter } from 'redux/actions/phonebook'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Contacts(){

  const {items: contacts, filter} = useSelector(store => store.contacts)
  const token = useSelector(store => store.user.token)
  
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleAddContact = ({name, number}) => {

    if(contacts.find(item => item.name === name)){
      alert(name + " is already in contacts")
      return false
    }

    dispatch(addContact({token, contact: {name, number, id: nanoid()}}))

    return true
  }

  useEffect(() => {
    if(!token || token === ""){
      navigate("/goit-react-hw-08-phonebook/login", { replace: true })
    }else{
      dispatch(getSavedContacts(token))
    }
  }, [token, navigate, dispatch])


  const handleFilterChange = ({target}) => {
      dispatch(setFilter(target.value))
  }

  const handleRemoveContact = (id) => {
    dispatch(deleteContact({token, id}))
  }

  const filteredContacts = filterContacts(contacts, filter)

  return (
    <Container>
      <Section title="Створити контакт">
        <ContactForm 
          addContact={handleAddContact} 
        />
      </Section>
      
      <Section title="Телефонна книга">
        <FilterConstacts onFilterChange={handleFilterChange}/>
        <ContactsList contacts={filteredContacts} removeContact={handleRemoveContact}/>
      </Section>      
    </Container>
  )
};

const filterContacts = (contacts, filter) => {
    if(!filter) return contacts
    filter = filter.toLowerCase()
    return contacts.filter(({name}) => name.toLowerCase().includes(filter))
}
