import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        value={ name }
        onChange={ event => setName( event.target.value ) } />

      <label htmlFor='phone'>Phone number</label>
      <input
        type='text'
        name='phone'
        id='phone'
        // pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}'
        value={ phone }
        onChange={ event => setPhone( event.target.value ) } />
      
      <label htmlFor='email'>Email address</label>
      <input
        type='text'
        name='email'
        id='email'
        value={ email }
        onChange={ event => setEmail( event.target.value ) } />
      <input
        type='submit'
        value='Add Contact' />
    </form>
  );
};

