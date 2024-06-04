import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ( { contacts, addContact } ) => {
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ nameIsDuplicate, setNameIsDuplicate ] = useState(false);

  function constructContact() {
    return {
      name: name,
      phone: phone,
      email: email
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( !nameIsDuplicate ) {
      addContact(constructContact());

      setName('');
      setPhone('');
      setEmail('');
      setNameIsDuplicate(false);
    }
  };

  useEffect( () => {
    setNameIsDuplicate(!!contacts.find( (contact) => contact.name === name ));
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={ name }
          setName={ setName }
          phone={ phone }
          setPhone={ setPhone }
          email={ email }
          setEmail={ setEmail }
          handleSubmit={ handleSubmit } />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objects={ contacts } />
      </section>
    </div>
  );
};
