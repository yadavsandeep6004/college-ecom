import Link from "next/link";
import { useRouter } from "next/router";
import { BsSearch, BsCart2 } from "react-icons/bs";

const Navbar = () => {
    const router = useRouter();

    const addClass = (path) => {
        if (router.route === path) {
            return 'px-2 cursor-pointer underline'
        }

        return 'px-2 cursor-pointer'
    }

    return (
        <div className="flex justify-between items-center bg-blue-700 text-white h-16 px-5">
            <div>
                <Link href='/'>
                    <p className="underline">Amejona</p>
                </Link>
            </div>
            <div className=" hidden lg:flex lg:items-center">
                <input type='text' placeholder="Search..." className="h-10 w-[400px] text-black p-2 outline-none" />
                <div className="bg-yellow-500 p-[5px]">
                    <BsSearch className="cursor-pointer text-3xl" />
                </div>
            </div>
            <div>

                <ul className="flex justify-center">

                    {/* <li className={addClass('/product')} ><Link href='/product'>product</Link></li> */}
                    <li className={addClass('/cart')} ><Link href='/cart' className="flex items-center">
                        <BsCart2 className="mr-1 text-2xl" />
                        cart
                    </Link>
                    </li>
                    <li className={addClass('/create')} ><Link href='/create'>create</Link></li>
                    <li className={addClass('/login')} ><Link href='/login'>login</Link></li>
                    <li className={addClass('/signup')} ><Link href='/signup'>signup</Link></li>

                </ul>

            </div>
        </div>
    )
}
export default Navbar