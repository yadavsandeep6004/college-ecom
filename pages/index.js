import CarouselComp from "../components/CarouselComp"
import ProductCard from "../components/ProductCard"
function Home({ products }) {
  console.log(products)
  return (
    <>
      <CarouselComp />
      <div className="flex flex-wrap justify-center">
        {
          products.map(data => <ProductCard item={data} key={data._id} />)
        }
      </div>
    </>
  )
}

export default Home



export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  return {
    props: {
      products: data
    }
  }
}