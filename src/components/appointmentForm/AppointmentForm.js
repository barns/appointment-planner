import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
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

      <label htmlFor='date'>Date</label>
      <input
        type='text'
        name='date'
        id='date'
        value={ date }
        min={ getTodayString() }
        onChange={ event => setDate( event.target.value ) } />
      
      <label htmlFor='time'>Time</label>
      <input
        type='text'
        name='time'
        id='time'
        value={ time }
        onChange={ event => setTime( event.target.value ) } />
      <ContactPicker
        contacts={ contacts }
        setContact={ setContact }
        value={ contact }
        name={ name } />
      <input
        type='submit'
        value='Add Appointment' />
    </form>
  );
};
