import Details from './details';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Thermometer} from 'react-feather';

function WeatherDetails() {
  return (
    <div className="w-full flex flex-col items-center my-3">
      <div className='flex gap-x-4'>
        {/* <span className="text-8xl">
          <TiWeatherPartlySunny />
        </span> */}
        <img src="https://openweathermap.org/img/wn/10d@4x.png" height={"107px"} width={"107px"} alt="" />
        <div className='flex flex-col justify-center items-center gap-y-1 text-primary'>
          <span className="text-5xl font-bold">21°c</span>
          <span className="text-2xl font-bold">New York</span>
        </div>
      </div>
      <Details />
    </div>
  )

}

export default WeatherDetails;

//https://openweathermap.org/current