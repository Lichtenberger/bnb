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
    {title:'Lake Tahoe, USA', image: house1, price: '$1,045', description: 'Lake house', rating: 4.9 },
    {title:'Oahu, USA', image: house2, price: '$445', description: 'Surf house', rating: 4.7 },
    {title:'Upstate, USA', image: house3, price: '$730', description: 'Grass house', rating: 2.3 },
    {title:'Mooredoor', image: house4, price: '$1,999', description: 'Hobbit house', rating: 5.0 },
    {title:'New Orleans, USA', image: house5, price: '$145', description: 'Mardi Gras!!!', rating: 3.9 },
    {title:'Baltimore, USA', image: house6, price: '$837', description: 'Inner City', rating: 1.2 },
    {title:'Key West, USA', image: house7, price: '$239', description: 'Beach house', rating: 4.9 },
    {title:'Montana, USA', image: house8, price: '$975', description: 'Mountain Views', rating: 4.6 },
    {title:'Maine, USA', image: house9, price: '$1,045', description: 'Victorian', rating: 4.2 },
    {title:'Aspen, USA', image: house0, price: '$920', description: 'Mountain house', rating: 3.8 },
    {title:'Lake Tahoe, USA', image: house1, price: '$1,045', description: 'Lake house', rating: 2.4 },
    {title:'Oahu, USA', image: house2, price: '$445', description: 'Surf house', rating: 1.8 },
    {title:'West Virginia, USA', image: house3, price: '$730', description: 'Grass house', rating: 4.8 },
    {title:'Mooredoor', image: house4, price: '$1,999', description: 'Hobbit house', rating: 3.8 },
    {title:'New Orleans, USA', image: house5, price: '$145', description: 'Mardi Gras!!!', rating: 1.4 },
    {title:'Baltimore, USA', image: house6, price: '$837', description: 'Inner City', rating: 2.8 },
    {title:'Key West, USA', image: house7, price: '$239', description: 'Beach house', rating: 3.7 },
    {title:'Montana, USA', image: house8, price: '$975', description: 'Mountain Views', rating: 2.8 },
    {title:'Maine, USA', image: house9, price: '$1,045', description: 'Victorian', rating: 6.3 },
    {title:'Aspen, USA', image: house0, price: '$920', description: 'Mountain house', rating: 2.0 },
    {title:'Maine, USA', image: house9, price: '$1,045', description: 'Victorian', rating: 3.3 },
    {title:'Aspen, USA', image: house0, price: '$920', description: 'Mountain house', rating: 1.2 },
    {title:'Lake Tahoe, USA', image: house1, price: '$1,045', description: 'Lake house', rating: 2.1 },
    {title:'Oahu, USA', image: house2, price: '$445', description: 'Surf house', rating: 3.2 },
    {title:'West Virginia, USA', image: house3, price: '$730', description: 'Grass house', rating: 5.0 },
    {title:'Mooredoor', image: house4, price: '$1,999', description: 'Hobbit house', rating: 1.3 },
    {title:'New Orleans, USA', image: house5, price: '$145', description: 'Mardi Gras!!!', rating: 3.8 },
    {title:'Baltimore, USA', image: house6, price: '$837', description: 'Inner City', rating: 4.2 },
    {title:'Key West, USA', image: house7, price: '$239', description: 'Beach house', rating: 2.1 },
    {title:'Montana, USA', image: house8, price: '$975', description: 'Mountain Views', rating: 4.2 },
    {title:'Maine, USA', image: house9, price: '$1,045', description: 'Victorian', rating: 3.9 },
    {title:'Aspen, USA', image: house0, price: '$920', description: 'Mountain house', rating: 4.9 },
    
  ]
  return (
    <div className='py-3 sm:py-5'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {rentals.map((rental) => (
          <Rental title={rental.title} description={rental.description} image={rental.image} price={rental.price} rating={rental.rating} />)
        )}
      </div>
    </div>
  )
}

export default Rentals