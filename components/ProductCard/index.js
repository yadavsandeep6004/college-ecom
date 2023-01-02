
import Link from "next/link";

const ProductCard = ({ item }) => {
    return (
        <div className=" w-[300px] m-4 flex flex-col justify-between shadow-xl p-2 rounded-md">
            <div>
                <Link href={`/product/${item._id}`} >
                    <img src={item.mediaUrl} alt={item.name} className='w-full h-full rounded-md cursor-pointer' />
                </Link>
            </div>
            <div className="flex justify-between py-3">
                <p className="font-medium">₹{item.price}</p>
                <p className="font-medium">{item.name}</p>
            </div>


        </div>
    )
}

export default ProductCard