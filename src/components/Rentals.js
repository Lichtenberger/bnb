import React from 'react'
import house1 from '../assets/house1.jpg'
import house2 from '../assets/house2.jpg'
import house3 from '../assets/house3.jpg'
import house4 from '../assets/house4.jpg'
import house5 from '../assets/house5.jpg'
import house6 from '../assets/house6.jpg'
import house7 from '../assets/house7.jpg'
import house8 from '../assets/house8.jpg'
import house9 from '../assets/house9.jpg'
import house0 from '../assets/house0.jpg'
import Rental from './Rental'

function Rentals({}) {
  const rentals = [
    {title:'Lake Tahoe, USA', image: house1, price: '$1,045', description: 'Lake house' },
    {title:'Oahu, USA', image: house2, price: '$445', description: 'Surf house' },
    {title:'West Virginia, USA', image: house3, price: '$730', description: 'Grass house' },
    {title:'Mooredoor', image: house4, price: '$1,999', description: 'Hobbit house' },
    {title:'New Orleans, USA', image: house5, price: '$145', description: 'Mardi Gras!!!' },
    {title:'Baltimore, USA', image: house6, price: '$837', description: 'Inner City' },
    {title:'Key West, USA', image: house7, price: '$239', description: 'Beach house' },
    {title:'Montana, USA', image: house8, price: '$975', description: 'Mountain Views' },
    {title:'Maine, USA', image: house9, price: '$1,045', description: 'Victorian' },
    {title:'Aspen, USA', image: house0, price: '$920', description: 'Mountain house' },
    {title:'Lake Tahoe, USA', image: house1, price: '$1,045', description: 'Lake house' },
    {title:'Oahu, USA', image: house2, price: '$445', description: 'Surf house' },
    {title:'West Virginia, USA', image: house3, price: '$730', description: 'Grass house' },
    {title:'Mooredoor', image: house4, price: '$1,999', description: 'Hobbit house' },
    {title:'New Orleans, USA', image: house5, price: '$145', description: 'Mardi Gras!!!' },
    {title:'Baltimore, USA', image: house6, price: '$837', description: 'Inner City' },
    {title:'Key West, USA', image: house7, price: '$239', description: 'Beach house' },
    {title:'Montana, USA', image: house8, price: '$975', description: 'Mountain Views' },
    {title:'Maine, USA', image: house9, price: '$1,045', description: 'Victorian' },
    {title:'Aspen, USA', image: house0, price: '$920', description: 'Mountain house' },
    {title:'Maine, USA', image: house9, price: '$1,045', description: 'Victorian' },
    {title:'Aspen, USA', image: house0, price: '$920', description: 'Mountain house' },
    {title:'Lake Tahoe, USA', image: house1, price: '$1,045', description: 'Lake house' },
    {title:'Oahu, USA', image: house2, price: '$445', description: 'Surf house' },
    {title:'West Virginia, USA', image: house3, price: '$730', description: 'Grass house' },
    {title:'Mooredoor', image: house4, price: '$1,999', description: 'Hobbit house' },
    {title:'New Orleans, USA', image: house5, price: '$145', description: 'Mardi Gras!!!' },
    {title:'Baltimore, USA', image: house6, price: '$837', description: 'Inner City' },
    {title:'Key West, USA', image: house7, price: '$239', description: 'Beach house' },
    {title:'Montana, USA', image: house8, price: '$975', description: 'Mountain Views' },
    {title:'Maine, USA', image: house9, price: '$1,045', description: 'Victorian' },
    {title:'Aspen, USA', image: house0, price: '$920', description: 'Mountain house' },
    
  ]
  return (
    <div className='py-3 sm:py-5'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {rentals.map((rental) => (
          <Rental title={rental.title} description={rental.description} image={rental.image} price={rental.price} />)
        )}
      </div>
    </div>
  )
}

export default Rentals