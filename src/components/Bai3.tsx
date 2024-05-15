import React, { useState } from 'react';

const Bai3: React.FC = () => {
  const [inputDate, setInputDate] = useState('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(event.target.value);
    console.log('Selected Date:', event.target.value);
  };

  return (
    <div>
      <input 
        type="date" 
        value={inputDate} 
        onChange={handleDateChange} 
        placeholder="Select a date"
      />
    </div>
  );
};

export default Bai3;