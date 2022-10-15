import Image from 'next/image'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {
  const {data: session} = useSession();

  return (
    <header>
      {/* Main Header */}
      <div className='flex items-center bg-amazon_blue flex-grow p-1 py-2'>
        {/* Logo */}
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 link'>
          <Image 
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
          />
        </div>

        {/* Search */}
        <div className='hidden h-10 sm:flex items-center flex-grow bg-yellow-500 hover:bg-yellow-600 rounded cursor-pointer'>
          <input type="text" className='rounded-l p-2 w-6 flex-grow flex-shrink focus:outline-none' />
          <MagnifyingGlassIcon className='h-14 p-4 px-3' />
        </div>

        {/* Right */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='link' onClick={signIn}>
            <p className='max-w-[144px] truncate'>
              { session ? `Hello, ${session.user.name}` : 'Hello, sign in'}
            </p>
            <p className='font-bold md:text-sm'>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-bold md:text-sm'>& orders</p>
          </div>
          <div className='flex items-end link relative'>
            <div className='text-yellow-600 absolute top-[-7px] font-bold md:text-lg right-[-4px] md:right-auto md:left-10'>1</div>
            <ShoppingCartIcon className='h-8 ' />
            <p className='hidden md:inline font-bold md:text-sm'>Cart</p>
          </div>
        </div>
      </div>

      {/* Sub Header */}
      <div className='flex items-center text-white bg-amazon_blue-light space-x-4 p-2 pl-5'>
        <p className='flex link items-center text-sm'>
          <Bars3Icon className='h-6 mr-1' />
          All
        </p>
        <p className='link text-sm'>Prime Video</p>
        <p className='link text-sm'>Amazon Business</p>
        <p className='link text-sm'>Today's Deals</p>
        <p className='link hidden lg:inline-flex text-sm'>Electronics</p>
        <p className='link hidden lg:inline-flex text-sm'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex text-sm'>Prime</p>
        <p className='link hidden lg:inline-flex text-sm'>Buy Again</p>
        <p className='link hidden lg:inline-flex text-sm'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex text-sm'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header