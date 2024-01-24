import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';
import { startStopDrive } from '../server/startStopDrive';
import { setStopSettings } from './setStopSettings';

export function reset(): void {
    data.isWinner = false;
    const tracksList = tagsData.garageBlock as Node;
    tracksList.childNodes.forEach((auto) => {
        (async () => {
            const track = auto as HTMLDivElement;
            const stop = track.querySelector('.stop') as HTMLButtonElement;
            const start = track.querySelector('.drive') as HTMLButtonElement;
            const id = stop.id.replace('-stop', '');
            const carDiv = stop.nextElementSibling as HTMLDivElement;
            const car = carDiv.firstChild as HTMLElement;
            const raceBut = tagsData.race;
            setStopSettings(start, stop, car, raceBut);
            await startStopDrive(+id, 'stopped');
        })();
    });
}
