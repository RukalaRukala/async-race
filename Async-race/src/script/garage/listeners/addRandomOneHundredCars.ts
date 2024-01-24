import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';
import { generateOneHundredCars } from '../functions/generateOneHundredCars';

export function addRandomOneHundredCars(): void {
        (async () => {
            await generateOneHundredCars();
            tagsData.carQuantity.innerHTML = String(data.carList.length);
        })();
}
