import ReactImageMagnify from 'react-image-magnify';
import apple from '../../public/img/apple.jpg';

const Zoom = () => {
    return (
        <ReactImageMagnify
            {...{
                smallImage: {
                    alt: "Cat",
                    isFluidWidth: true,
                    src: `${apple}`,
                    // srcSet,
                    // sizes:
                    //     "(min-width: 1000px) 33.5vw, (min-width: 415px) 50vw, 100vw"
                },
                largeImage: {
                    alt: "",
                    src: `${apple}`,
                    width: 1200,
                    height: 1800
                },
                isHintEnabled: true
            }}
        />
    )
}

export default Zoom