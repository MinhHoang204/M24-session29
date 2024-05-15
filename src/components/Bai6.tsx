import React, { useState } from 'react';

const Bai6: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isVisible ? 'Hiển' : 'Ẩn'}
      </button>
    </div>
  );
};

export default Bai6;