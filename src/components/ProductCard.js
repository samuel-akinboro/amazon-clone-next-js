import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid'
import CurrencyFormat from 'react-currency-format'
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice'

function ProductCard({id, title, price, category, image, description, rating}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      category,
      image,
      description,
      rating
    };
    
    dispatch(addToBasket(product));
  }

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-8 px-5 pb-5'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <Image 
        src={image} 
        height={200} 
        width={200}
        objectFit='contain'
      />
      <h4 className='my-3'>{title}</h4>
      <div className='flex items-center space-x-2'>
        <div className='flex item-center'>
          {
            Array(Math.floor(rating.rate))
              .fill()
              .map((_, i) => <SolidStarIcon key={`star-${i}`} className='h-5 text-yellow-500' />)
          }
          {
            Array(5 - Math.floor(rating.rate))
              .fill()
              .map((_, i) => <StarIcon key={`empty-star-${i}`} className='h-5 text-yellow-500' />)
          }
        </div>
        <p>({rating.count})</p>
      </div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <p className='mb-2'>
        <CurrencyFormat 
          value={price}
          prefix={'$'}
          displayType={'text'}
          thousandSeparator={true}
        />
      </p>
      <button className='mt-auto button' onClick={addItemToBasket}>Add to cart</button>
    </div>
  )
};

export default ProductCard