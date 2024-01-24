import { ICar } from '../interfaces/carServer.interfaces';
import { ICarStarter } from '../interfaces/carStarter.interfaces';
import { buildTrackForOneCar } from '../utils/buildTrackForOneCar.utils';

export class CarStarter implements ICarStarter {
    private car: ICar;

    private model: string;

    private color: string;

    private id: number;

    private track: HTMLDivElement;

    constructor(model: string, col: string, id: number) {
        this.car = { name: model, color: col };
        this.model = model;
        this.color = col;
        this.id = id;
        this.track = document.createElement('div');
    }

    getTrack(): HTMLDivElement {
        this.track = buildTrackForOneCar(this.model, this.color, this.id);
        return this.track;
    }

    getCar(): ICarStarter {
        return this;
    }
}
