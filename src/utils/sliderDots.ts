import type {
    KeenSliderHooks,
    KeenSliderInstance,
    KeenSliderOptions,
    SliderInstance,
} from 'keen-slider';

function SliderDots(
    slider: SliderInstance<
        KeenSliderOptions<{}, {}, KeenSliderHooks>,
        KeenSliderInstance<{}, {}, KeenSliderHooks>,
        KeenSliderHooks
    >
) {
    let wrapper: any, dots: HTMLDivElement;

    function markup(remove?: any) {
        wrapperMarkup(remove);
        dotMarkup(remove);
    }

    function removeElement(elment: HTMLElement) {
        elment.parentNode!.removeChild(elment);
    }

    function createDiv(className: string) {
        var div = document.createElement('div');
        var classNames = className.split(' ');
        classNames.forEach(name => div.classList.add(name));
        return div;
    }

    function wrapperMarkup(remove: boolean) {
        if (remove) {
            var parent = wrapper.parentNode;
            while (wrapper.firstChild)
                parent.insertBefore(wrapper.firstChild, wrapper);
            removeElement(wrapper);
            return;
        }
        wrapper = createDiv('navigation-wrapper');
        slider.container.parentNode!.appendChild(wrapper);
        wrapper.appendChild(slider.container);
    }

    function dotMarkup(remove: boolean) {
        if (remove) {
            removeElement(dots);
            return;
        }
        dots = createDiv('dots');
        slider.track.details.slides.forEach((_e, idx) => {
            var dot = createDiv('dot');
            dot.addEventListener('click', () => slider.moveToIdx(idx));
            dots.appendChild(dot);
        });
        wrapper.appendChild(dots);
    }

    function updateClasses() {
        var slide = slider.track.details.rel;
        Array.from(dots.children).forEach(function (dot, idx) {
            idx === slide
                ? dot.classList.add('dot--active')
                : dot.classList.remove('dot--active');
        });
    }

    slider.on('created', () => {
        markup();
        updateClasses();
    });
    slider.on('optionsChanged', () => {
        console.log(2);
        markup(true);
        markup();
        updateClasses();
    });
    slider.on('slideChanged', () => {
        updateClasses();
    });
    slider.on('destroyed', () => {
        markup(true);
    });
}
export { SliderDots };
