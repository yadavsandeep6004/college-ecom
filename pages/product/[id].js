
const sigleProduct = ({ product }) => {

    return (
        <div className=" m-4 flex flex-col lg:flex-row  shadow-xl p-2 rounded-md">

            <div className="flex-1">
                <img src={product.mediaUrl} alt={product.name} className='' />
            </div>

            <div className="flex-1 p-3">
                <div className="flex justify-between text-justify pb-4">
                    <p className="font-medium">₹{product.price}</p>
                    <p className="font-medium">{product.name}</p>

                </div>

                <p className="font-normal text-gray-900">{product.description}</p>

                <div className="flex justify-between py-4">
                    <button className="shadow-xl px-3 py-2 bg-green-600 text-white rounded" >Checkout</button>
                    <button className="shadow-xl px-3 py-2 bg-green-600 text-white rounded">ADD-TO-CART</button>
                </div>

            </div>


        </div>
    )
}

export async function getServerSideProps({ query: { id } }) {
    const res = await fetch(`http://localhost:3000/api/product/${id}`)
    const data = await res.json()

    return {
        props: {
            product: data
        },
    }
}

export default sigleProduct