import { tagsData } from '../../data/tagsData';
import { defineFinishTime } from '../functions/defineFinishTime';
import { setDriveSettings } from '../functions/setDriveSettings';
import { IVelocity } from '../interfaces/velocity.interfaces';
import { startStopDrive } from '../server/startStopDrive';

export function startGlobalRace(): void {
    const tracksList = tagsData.garageBlock as Node;
    tracksList.childNodes.forEach((auto) => {
        (async (): Promise<void> => {
            const track = auto as HTMLDivElement;
            const stop = track.querySelector('.stop') as HTMLButtonElement;
            const start = track.querySelector('.drive') as HTMLButtonElement;
            const carDiv = stop.nextElementSibling as HTMLDivElement;
            const car = carDiv.firstChild as HTMLElement;
            const flag = track.lastElementChild as HTMLDivElement;
            const id = +flag.id.replace('-flag', '');
            const velocity = await startStopDrive(id, 'started') as IVelocity;
            const time = velocity.distance / velocity.velocity / 1000;
            setDriveSettings(start, stop, car, carDiv, flag, tagsData.race, time, id);
            defineFinishTime(flag, car, id, Number(time.toFixed(3)));
        })();
    });
}
