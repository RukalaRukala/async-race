import { tagsData } from '../../data/tagsData';
import { defineFinishTime } from '../functions/defineFinishTime';
import { setDriveSettings } from '../functions/setDriveSettings';
import { IVelocity } from '../interfaces/velocity.interfaces';
import { startStopDrive } from '../server/startStopDrive';

export function startTrack(targ: HTMLElement): void {
    const target = targ as HTMLButtonElement;
    (async () => {
        const id = +target.id.replace('-drive', '');
        const stop = target.nextElementSibling as HTMLButtonElement;
        const carDiv = stop.nextElementSibling as HTMLDivElement;
        const car = carDiv.firstChild as HTMLElement;
        const flag = document.getElementById(`${id}-flag`) as HTMLDivElement;
        const raceBut = tagsData.race;
        const velocity = await startStopDrive(id, 'started') as IVelocity;
        const time = velocity.distance / velocity.velocity / 1000;
        setDriveSettings(target, stop, car, carDiv, flag, raceBut, time, id);
        defineFinishTime(flag, car, id, Number(time.toFixed(3)));
    })();
}
