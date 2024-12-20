import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './Carousel.css';

interface CarouselProps {
    direction?: 'ltr' | 'rtl';
    images: string[];
}

const animation = { duration: 50000, easing: (t: number) => t };

function Carousel({ direction = 'ltr', images }: CarouselProps) {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: 'performance',
        rtl: direction === 'rtl',
        drag: true,
        mode: 'free',
        dragSpeed: 0.8,
        defaultAnimation: animation,
        slides: {
            perView: () => (window.innerWidth - 160) / 480,
            spacing: 32,
        },
        created(s) {
            s.moveToIdx(5, true);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true);
        },
    });

    return (
        <div ref={sliderRef} className="keen-slider">
            {images.map((image, index) => (
                <div key={index} className="keen-slider__slide">
                    <img src={image} alt="logo" />
                </div>
            ))}
        </div>
    );
}

export default Carousel;
