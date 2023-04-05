import React, { useState } from 'react';

function AppointmentForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your Appointment is confirmed");
  };
 
  

  return (
    <div id='form'>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br></br>
      <br></br>
      <label>
        Date:
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </label>
      <br></br>
      <br></br>
      <label>
        Time:
        <input type="time" value={time} onChange={(event) => setTime(event.target.value)} />
      </label>
      <br></br>
      <br></br>
      <label>
        Doctor:
        <select value={doctor} onChange={(event) => setDoctor(event.target.value)}>
          <option value="">Select a doctor</option>
          <option value="Dr. Smith">Dr.Padmapriya</option>
          <option value="Dr. Johnson">Dr.Mirthula</option>
          <option value="Dr. Lee">Dr.Karthigeyan</option>
          <option value="Dr. Lee">Dr.Kavitha</option>
        </select>
      </label>
      <br></br>
      <br></br>
      <button type="submit">Book Appointment</button>
    </form>
    </div>
  );
}

export default AppointmentForm;