import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ( { appointments, contacts, addAppointment } ) => {
  const [ name, setName ] = useState('');
  const [ contact, setContact ] = useState({});
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');

  function constructAppointment() {
    return {
      name: name,
      date: date,
      time: time,
      contact: contact
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addAppointment(constructAppointment());

    setName('');
    setDate('');
    setTime('');
    setContact({});
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          name={ name }
          setName={ setName }
          contact={ contact }
          setContact={ setContact }
          date={ date }
          setDate={ setDate }
          time={ time }
          setTime={ setTime }
          contacts={ contacts }
          handleSubmit={ handleSubmit } />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          objects={ appointments } />
      </section>
    </div>
  );
};