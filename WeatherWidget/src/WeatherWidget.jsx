import React, { useState } from 'react';
import styles from './styles.module.css';

const CITIES = [
  'Москва',
  'Санкт-Петербург',
  'Новосибирск',
  'Екатеринбург',
  'Казань',
  'Нижний Новгород',
  'Челябинск',
  'Самара',
  'Омск',
  'Ростов-на-Дону',
];

const WeatherWidget = () => {
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);

  const getFakeWeather = (city) => {
    let hash = 0;
    for (let i = 0; i < city.length; i++) {
      hash = city.charCodeAt(i) + ((hash << 5) - hash);
    }
    const temp = (Math.abs(hash) % 41) - 10;

    const icons = ['☀️', '☁️', '🌧️', '❄️', '⛈️'];
    const icon = icons[Math.abs(hash) % icons.length];

    return { temp, icon };
  };

  const { temp, icon } = getFakeWeather(selectedCity);

  return (
    <div className={styles.widget}>
      <label>
        Выберите город:
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className={styles.select}
        >
          {CITIES.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>

      <div className={styles.weather}>
        <div className={styles.city}>{selectedCity}</div>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.temp}>{temp}°C</div>
      </div>
    </div>
  );
};

export default WeatherWidget;