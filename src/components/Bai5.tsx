import React, { useState } from 'react';

const Bai5: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hiển' : 'Ẩn'}
      </button>
    </div>
  );
};

export default Bai5;