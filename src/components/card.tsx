import Form from './form';
import WeatherDeatails from './weatherDetails'
import WeatherCondition from './weatherCondition';

function Card({ weather, handleSearch }: any) {
  return (
    <div className="w-fit bg-secondary border rounded-xl shadow-xl py-7 flex flex-col justify-center items-center">
      <Form onSearch={handleSearch}/>
      <WeatherCondition condition={weather.weather[0].description}/>
      <WeatherDeatails
        icon={weather.weather[0].icon}
        temperature={weather.main.temp}
        place={weather.name}
        humidity={weather.main.humidity}
        cloud={weather.clouds.all}
        windSpeed={weather.wind.speed}
      />
    </div>
  )
}

export default Card;