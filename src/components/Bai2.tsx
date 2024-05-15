import React, { useState } from 'react';

const Bai2 : React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log('Current Input Value:', event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Nhập dữ liệu"
      />
    </div>
  );
};

export default Bai2;