import Carousel from "@/atoms/Carousel";
import type { KeenSliderOptions } from "keen-slider";

const animation = { duration: 50000, easing: (t: number) => t };

const options: KeenSliderOptions = {
    loop: true,
    renderMode: 'performance',
    rtl: false,
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
};

const PARTNERS = [
    'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
    'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
    'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
    'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
    'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
    'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
    'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
    'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
];

function PartnersCarousel() {
    return <>
        <Carousel options={options}>
            {PARTNERS.map((src, index) => (
                <img key={index} src={src} alt='partner' />
            ))}
        </Carousel>
        <Carousel options={{ ...options, rtl: true }}>
            {PARTNERS.map((src, index) => (
                <img key={index} src={src} alt='partner' />
            ))}
        </Carousel>
    </>
}

export default PartnersCarousel;