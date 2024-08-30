import Item from './item';

import { Droplet, Cloud, Wind } from 'react-feather';

function Details() {
  return(
    <div className='w-full flex justify-around mt-2 gap-y-2 text-secondary'>
      <Item value='2 %' child={<Droplet className='text-neutral-dark'/>} />
      <Item value='15 %' child={<Cloud className='text-neutral-dark'/>} />
      <Item value='15 km/h' child={<Wind className='text-neutral-dark'/>} />
    </div>
  )
}

export default Details;