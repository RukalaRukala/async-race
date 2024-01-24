import { startStopDrive } from '../server/startStopDrive';
import { brakeCar } from './breakeCar';
import { getCoords } from './getCoord';
import { setCautionSign } from './setCautionSign';

export function setDriveSettings(
    startBut: HTMLButtonElement,
    stopBut: HTMLButtonElement,
    carSVG: HTMLElement,
    carDiv: HTMLDivElement,
    flagDiv: HTMLDivElement,
    raceBut: HTMLButtonElement,
    time: number,
    id: number,
    ): void {
        const start = startBut;
        const stop = stopBut;
        const car = carSVG;
        const flag = flagDiv;
        const race = raceBut;
        race.disabled = true;
        start.disabled = true;
        start.style.borderColor = 'grey';
        start.style.color = 'grey';
        stop.disabled = false;
        stop.style.borderColor = '';
        stop.style.color = '';
        car.setAttribute('class', 'driving');
        car.style.transition = `${time}s`;
        car.style.transitionTimingFunction = 'linear';
        car.style.transform = `translate(${getCoords(flag).left}px)`;
        (async () => {
            try {
                await startStopDrive(id, 'drive');
            } catch {
                const carBreakPlace = car.getBoundingClientRect().x - 65;
                if (startBut.disabled === true) {
                    brakeCar(car, carBreakPlace);
                    setCautionSign(carDiv, carBreakPlace);
                }
            }
        })();
}
