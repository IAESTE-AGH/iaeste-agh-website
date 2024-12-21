import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './Carousel.css';
import type { KeenSliderOptions } from 'keen-slider';
import { Children } from 'react';

interface CarouselProps {
    options?: KeenSliderOptions;
    children?: any[];
}

function Carousel({ options, children }: CarouselProps) {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(options);
    return (
        <div ref={sliderRef} className="keen-slider">
            {Children.map(children, (child, index) => {
                return <div className='keen-slider__slide' key={index}>{child}</div>;
            })}
        </div>
    );
}

export default Carousel;
