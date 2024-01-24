import { data } from '../../data/data';
import { ICar } from '../interfaces/carServer.interfaces';

let carCount = 0;

export async function getCarQuantity(): Promise<number> {
    const response = await fetch(data.urlGarage);
    const obj: ICar[] = await response.json();
    carCount = obj.length;
    return carCount;
}
