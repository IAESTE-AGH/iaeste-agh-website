import type {
    KeenSliderHooks,
    KeenSliderInstance,
    KeenSliderOptions,
    SliderInstance,
} from 'keen-slider';

export function WheelControls(
    slider: SliderInstance<
        KeenSliderOptions<{}, {}, KeenSliderHooks>,
        KeenSliderInstance<{}, {}, KeenSliderHooks>,
        KeenSliderHooks
    >
) {
    var touchTimeout: any;
    var position: { x: number; y: number };
    var wheelActive: boolean;

    function dispatch(e: any, name: string) {
        position.x -= e.deltaX;
        position.y -= e.deltaY;
        slider.container.dispatchEvent(
            new CustomEvent(name, {
                detail: {
                    x: position.x,
                    y: position.y,
                },
            })
        );
    }

    function wheelStart(e: any) {
        position = {
            x: e.pageX,
            y: e.pageY,
        };
        dispatch(e, 'ksDragStart');
    }

    function wheel(e: any) {
        dispatch(e, 'ksDrag');
    }

    function wheelEnd(e: any) {
        dispatch(e, 'ksDragEnd');
    }

    function eventWheel(e: any) {
        e.preventDefault();
        if (!wheelActive) {
            wheelStart(e);
            wheelActive = true;
        }
        wheel(e);
        clearTimeout(touchTimeout);
        touchTimeout = setTimeout(() => {
            wheelActive = false;
            wheelEnd(e);
        }, 50);
    }

    slider.on('created', () => {
        slider.container.addEventListener('wheel', eventWheel, {
            passive: false,
        });
    });
}
