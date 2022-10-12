import ProductCard from "./ProductCard"

function ProductFeed({products}) {
  return (
    <div>
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