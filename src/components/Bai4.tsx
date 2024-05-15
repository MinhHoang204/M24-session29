import React, { useState } from 'react';

const Bai4: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('');

  const cities = [
    'Hà Nội',
    'Hồ Chí Minh',
    'Đà Nẵng',
    'Hải Phòng',
    'Cần Thơ',
    'Nha Trang',
    'Vũng Tàu',
    'Huế',
    'Quảng Ninh',
    'Quảng Nam'
];

const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
};

return (
    <div>
      <label htmlFor="cities">Chọn tỉnh/thành phố:</label>
      <select id="cities" value={selectedCity} onChange={handleChange}>
        <option value="">Chọn...</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      {selectedCity && <p>Bạn đã chọn: {selectedCity}</p>}
    </div>
  );
};

export default Bai4;
