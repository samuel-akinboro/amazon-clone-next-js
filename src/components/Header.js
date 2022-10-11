import Image from 'next/image'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'

function Header() {
  return (
    <header>
      {/* Main Header */}
      <div className='flex items-center bg-amazon_blue flex-grow p-1 py-2'>
        {/* Logo */}
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image 
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
          />
        </div>

        {/* Search */}
        <div className='hidden h-10 sm:flex items-center flex-grow bg-yellow-400 rounded-md cursor-pointer'>
          <input type="text" className='rounded-l-md p-2 w-6 flex-grow flex-shrink focus:outline-none' />
          <MagnifyingGlassIcon className='h-12 p-4' />
        </div>
      </div>

      {/* Sub Header */}
    </header>
  )
}

export default Header