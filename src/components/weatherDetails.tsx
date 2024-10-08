import Details from './details';

interface weatherDetails {
  icon: string,
  temperature: number,
  place: string,
  humidity: number,
  cloud: number,
  windSpeed: number
}

function WeatherDetails({icon, temperature, place, humidity, cloud, windSpeed}: weatherDetails) {
  return (
    <div className="w-fit mx-20 flex flex-col items-center ">
      <div className='flex gap-x-4'>
        <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} className='filter drop-shadow-xl object-none' height={"145px"} width={"145px"} alt=""/>
        <div className='flex flex-col justify-center items-center gap-y-1 text-primary'>
          <span className="text-5xl font-bold">{temperature}°c</span>
          <span className="text-2xl font-bold">{place}</span>
        </div>
      </div>
      <Details
        humidity={humidity}
        cloud={cloud}
        windSpeed={windSpeed}
      />
    </div>
  )

}

export default WeatherDetails;

//https://openweathermap.org/current