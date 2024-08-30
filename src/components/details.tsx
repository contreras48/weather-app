import Item from './item';

import { Droplet, Cloud, Wind } from 'react-feather';

interface details {
  humidity: number,
  cloud: number,
  windSpeed: number
}

function Details({ humidity, cloud, windSpeed }: details) {
  return(
    <div className='w-full flex justify-around mt-2 gap-y-2 text-secondary'>
      <Item value={`${humidity} %`} child={<Droplet className='text-neutral-dark'/>} />
      <Item value={`${cloud} %`} child={<Cloud className='text-neutral-dark'/>} />
      <Item value={`${windSpeed} m/s`} child={<Wind className='text-neutral-dark'/>} />
    </div>
  )
}

export default Details;