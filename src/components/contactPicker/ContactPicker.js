import React from "react";

export const ContactPicker = ( { contacts, setContact, value, name }) => {
  const optionsArray = []
  contacts.map( (contact, index) => {
    optionsArray.push(
      <option
        value={ contact.name }
        key={ index } >
        { contact.name }
      </option>
    );
  });

  return (
    <select
      onChange={ event => setContact(event.target.value) }
      value={ value }
      name={ name } >

      <option
        selected='selected'
        value='' >
        No Contact Selected
      </option>

      { optionsArray }
    </select>
  );
};
