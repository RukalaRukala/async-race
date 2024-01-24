import { removeCautionSign } from './removeCautionSign';

export function setStopSettings(
    startBut: HTMLButtonElement,
    stopBut: HTMLButtonElement,
    carSVG: HTMLElement,
    raceBut: HTMLButtonElement,
    resetBut?: HTMLButtonElement,
    ): void {
        const start = startBut;
        const stop = stopBut;
        const car = carSVG;
        const reset = resetBut;
        const race = raceBut;
        if (reset) reset.disabled = true;
        stop.disabled = true;
        race.disabled = false;
        start.disabled = false;
        stop.style.borderColor = 'grey';
        stop.style.color = 'grey';
        start.style.borderColor = '';
        start.style.color = '';
        car.removeAttribute('class');
        car.style.transition = '';
        car.style.transitionTimingFunction = '';
        car.style.transform = '';
        removeCautionSign(carSVG);
}
