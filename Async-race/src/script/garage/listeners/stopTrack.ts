import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';
import { setStopSettings } from '../functions/setStopSettings';

export function stopTrack(targ: HTMLElement): void {
    const target = targ as HTMLButtonElement;
    data.isWinner = false;
    const start = target.previousElementSibling as HTMLButtonElement;
    const carDiv = target.nextElementSibling as HTMLDivElement;
    const car = carDiv.firstChild as HTMLElement;
    const raceBut = tagsData.race;
    setStopSettings(start, target, car, raceBut, target);
}
