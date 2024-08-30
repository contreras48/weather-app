import Form from './form';
import WeatherDeatails from './weatherDetails'

function Card() {
  return (
    <div className="w-full max-w-sm bg-white border border-border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-5 flex flex-col justify-center items-center">
      <Form />
      <WeatherDeatails />
    </div>
  )
}

export default Card;