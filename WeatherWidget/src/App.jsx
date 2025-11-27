import WeatherWidget from './WeatherWidget.jsx';

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Погодный виджет</h1>
      <WeatherWidget />
    </div>
  );
};

export default App;