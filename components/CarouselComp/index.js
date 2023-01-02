import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import apple from '../../public/img/apple.jpg';
import mobile from '../../public/img/mobile.jpg';
import office from '../../public/img/office.jpg';
import Image from "next/image";

const CarouselComp = () => {
    return (
        <Carousel autoPlay>
            <div>
                <Image src={apple} alt='apple' className="w-full h-[400px]" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <Image src={mobile} alt='mobile' className="w-full h-[400px]" />
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <Image src={office} alt='office' className="w-full h-[400px]" />
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    )
}

export default CarouselComp