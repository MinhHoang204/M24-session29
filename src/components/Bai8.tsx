import React, { useState } from 'react';

const Bai8: React.FC = () => {
  // Khai báo state `count` với giá trị khởi tạo là 0
  const [count, setCount] = useState<number>(0);

  // Hàm xử lý sự kiện khi nhấn nút
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Trước khi bấm: {count}</p>
      <button onClick={handleClick}>Click 0 lần</button>
    </div>
  );
};

export default Bai8;