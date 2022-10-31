import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid'
import CurrencyFormat from 'react-currency-format'

function CheckoutItemCard ({
  id, 
  title, 
  price, 
  category, 
  image, 
  description, 
  rating
}) {
  return (
    <div className='grid grid-cols-5'>
      {/* left */}
      <Image 
        src={image}
        height={200} 
        width={200} 
        objectFit='contain'
       />

      {/* middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex space-x-3 my-2">
          <div className='flex items-center space-x-1'>
            {Array(Math.floor(rating.rate))
              .fill()
              .map((_, i) => (<SolidStarIcon className='h-5 text-yellow-200' />))
            }
            {Array(5 - Math.floor(rating.rate))
              .fill()
              .map((_, i) => (<StarIcon className='h-5 text-yellow-200' />))
            }
          </div>
          <p>({rating.count})</p>
        </div>
        <p className="line-clamp-3 text-xs mb-2 mt-2 text-gray-700 leading-5">{description}</p>
        <p className='mb-2'>
          <CurrencyFormat 
            value={price}
            prefix={'$'}
            displayType={'text'}
            thousandSeparator={true}
          />
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-col space-y-2 justify-self-end my-auto">
        <button className="button px-8">Add to Cart</button>
        <button className="button px-8">Remove</button>
      </div>
    </div>
  )
}

export default CheckoutItemCard