import { ICarStarter } from '../interfaces/carStarter.interfaces';
import { IGarageFormer } from '../interfaces/garageFormer.interfaces';

export class GarageFormer implements IGarageFormer {
    private garage: HTMLDivElement;

    private cars: ICarStarter[];

    constructor(cars: ICarStarter[]) {
        const element = document.createElement('div') as HTMLDivElement;
        element.setAttribute('id', 'garage');
        this.garage = element;
        this.cars = cars;
    }

    form(): HTMLDivElement {
        let counter = 0;
        this.cars.reverse().forEach((elem) => {
            const car = elem;
            const track = car.getTrack();
            if (counter < 7) this.garage.append(track);
            counter += 1;
        });
        return this.garage;
    }
}
