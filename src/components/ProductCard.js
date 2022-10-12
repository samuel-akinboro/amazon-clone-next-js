import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid'

function ProductCard({id, title, price, category, image, description, rating}) {
  return (
    <div>
      <p>{category}</p>
      <Image 
        src={image} 
        height={200} 
        width={200}
      />
      <h4>{title}</h4>
      <div className='flex items-center space-x-2'>
        <div className='flex item-center'>
          {
            Array(Math.floor(rating.rate))
              .fill()
              .map((_, i) => <SolidStarIcon key={`star-${i}`} className='h-5' />)
          }
          {
            Array(5 - Math.floor(rating.rate))
              .fill()
              .map((_, i) => <StarIcon key={`empty-star-${i}`} className='h-5' />)
          }
        </div>
        <p>({rating.count})</p>
      </div>
    </div>
  )
};

export default ProductCard