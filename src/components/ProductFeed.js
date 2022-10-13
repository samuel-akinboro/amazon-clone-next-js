import ProductCard from "./ProductCard"

function ProductFeed({products}) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-36 xl:-mt-64">
      {
        products.map(({
          id, 
          title, 
          price, 
          category, 
          image, 
          description,
          rating
        }) => (
          <ProductCard 
            key={id} 
            title={title}
            price={price}
            image={image}
            rating={rating}
            category={category}
            description={description}
          />
        ))
      }
    </div>
  )
};

export default ProductFeed