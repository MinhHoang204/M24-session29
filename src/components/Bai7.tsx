import React, { useState } from 'react';

const Bai7: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const addNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1; // Tạo một số nguyên dương ngẫu nhiên từ 1 đến 100
    setNumbers([...numbers, newNumber]);
  };

  return (
    <div>
      <button onClick={addNumber}>Thêm số</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bai7;