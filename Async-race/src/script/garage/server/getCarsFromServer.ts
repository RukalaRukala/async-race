import { ICarResp } from '../interfaces/carResp.interfaces';
import { CarStarter } from '../classes/carStarter';
import { data } from '../../data/data';
import { ICarStarter } from '../interfaces/carStarter.interfaces';

export async function getCarsFromServer(): Promise<ICarStarter[]> {
    const response = await fetch(data.urlGarage);
    const carList = await response.json();
    const result: ICarStarter[] = carList.map((car: ICarResp) => {
        const auto = new CarStarter(car.name, car.color, car.id);
        return auto;
    });
    return result;
}
