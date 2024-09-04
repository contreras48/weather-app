import Item from './item';

import { Droplet, Cloud, Wind } from 'react-feather';

interface details {
  humidity: number,
  cloud: number,
  windSpeed: number
}

function Details({ humidity, cloud, windSpeed }: details) {
  return(
    <div className='w-full flex justify-around mt-2 gap-y-2 text-primaryText'>
      <Item value={`${humidity} %`} child={<Droplet/>} />
      <Item value={`${cloud} %`} child={<Cloud/>} />
      <Item value={`${windSpeed} m/s`} child={<Wind/>} />
    </div>
  )
}

export default Details;