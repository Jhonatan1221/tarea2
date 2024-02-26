import React, { useState } from 'react';
import dayjs from 'dayjs';


const App = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const calculateAge = () => {
    const today = dayjs();
    const birthDate = dayjs(birthdate);
    const years = today.diff(birthDate, 'year');
    setAge(years);
  };

  return (
    <div>
      <h1>Operaciones con Fechas</h1>
      
      <label>Ingresa tu fecha de nacimiento:</label>
      <input type="date" onChange={handleBirthdateChange} />
      
      <button onClick={calculateAge}>Calcular Edad</button>
      
      {age !== null && (
        <div>
          <p>Fecha Actual: {dayjs().format('YYYY-MM-DD')}</p>
          <p>Fecha de Nacimiento: {dayjs(birthdate).format('YYYY-MM-DD')}</p>
          <p>Edad: {age} años</p>
        </div>
      )}
    </div>
  );
};

export default App;
