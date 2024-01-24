import { carsBase } from '../../data/cars';
import { ICars } from '../interfaces/cars.interfaces';

export function getRandomCar(): string {
    const getRandomObj = (arr: ICars[] | string[]) => Math.floor(Math.random() * arr.length);
    const randCar = carsBase[getRandomObj(carsBase)];
    const carName = randCar.name;
    const model = randCar.models[getRandomObj(randCar.models)];
    const car = `${carName} ${model}`;

    return car;
}
