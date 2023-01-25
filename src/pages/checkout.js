import Image from "next/image"
import { useSelector } from "react-redux"
import CheckoutItemCard from "../components/CheckoutItemCard";
import Header from "../components/Header"
import { selectItems, selectTotal } from "../slices/basketSlice"
import CurrencyFormat from "react-currency-format";
import { useSession } from "next-auth/react";

function checkout(){
  const {data: session} = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="lg:flex max-w-screen-2xl mx-auto">
        {/* main column */}
        <div className="m-5 flex-grow shadow-sm">
          <div className='h-64 relative w-full'>
            <Image
              src='https://links.papareact.com/ikj'
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="flex flex-col space-y-10 bg-white p-5">
            <h1 className='text-3xl border-b pb-4'>
              {items.length === 0 ? 'Your Amazon Cart is Empty' : 'Shopping Cart'}
            </h1>

            {
              items.map((item, i) => (
                <CheckoutItemCard
                  key={item.id + "" + i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                  description={item.description}
                  rating={item.rating}
                />
              ))
            }
          </div>
        </div>
        {/* side column */}
        {items.length > 0 && (
          <div className='p-10 bg-white shadow-md flex flex-col'>
            <>
              <h2 className='whitespace-nowrap'>
                Subtotal ({items.length} items):{' '}
                <span className='font-bold'>
                  <CurrencyFormat 
                    value={total}
                    prefix={'$'}
                    displayType={'text'}
                    thousandSeparator={true}
                  />
                </span>
              </h2>
              <button 
                disabled={!session}
                className={`button mt-2 ${!session && 'bg-gradient-to-b from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed'}`}
              >
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </>
          </div>
        )}
      </div>
    </div>
  )
}

export default checkout