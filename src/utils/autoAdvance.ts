import type {
    KeenSliderHooks,
    KeenSliderInstance,
    KeenSliderOptions,
    SliderInstance,
} from 'keen-slider';

export function AutoAdvance(switchTime: number) {
    return function (
        slider: SliderInstance<
            KeenSliderOptions<{}, {}, KeenSliderHooks>,
            KeenSliderInstance<{}, {}, KeenSliderHooks>,
            KeenSliderHooks
        >
    ) {
        let timeout: any;
        let mouseOver = false;
        function clearNextTimeout() {
            clearTimeout(timeout);
        }
        function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
                if (
                    slider.track.details.position === slider.track.details.max
                ) {
                    slider.moveToIdx(0);
                } else {
                    slider.next();
                }
            }, switchTime);
        }
        slider.on('created', () => {
            slider.container.addEventListener('mouseover', () => {
                mouseOver = true;
                clearNextTimeout();
            });
            slider.container.addEventListener('mouseout', () => {
                mouseOver = false;
                nextTimeout();
            });
            nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
    };
}
