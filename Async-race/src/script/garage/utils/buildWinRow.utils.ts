import { carSVG } from '../../data/carSVG';
import { divHTML } from '../classes/elementBuilder';
import { IWinner } from '../interfaces/winner.interfaces';
import { getOneCarFromServer } from '../server/getOneCarFromServer';

export async function buildWinRow(win: IWinner, index: number): Promise<HTMLDivElement> {
    const car = await getOneCarFromServer(win.id);
    const row = divHTML.getElement('', `${win.id}-row`, 'tab-wrapper') as HTMLDivElement;
    const winNumber = divHTML.getElement(`${index}`, `${win.id}-tab-num`, 'tab-num');
    const winCar = divHTML.getElement('', `${win.id}-tab-car`, 'tab-car');
    const winName = divHTML.getElement(`${car.name}`, `${win.id}-tab-name`, 'tab-name');
    const winWins = divHTML.getElement(`${win.wins}`, `${win.id}-tab-wins`, 'tab-wins');
    const winTime = divHTML.getElement(`${win.time}`, `${win.id}-tab-time`, 'tab-time');

    const carColor = car.color;
    winCar.innerHTML = carSVG;
    if (winCar.querySelector('#car-svg g')) {
        const svgCar = winCar.querySelector('#car-svg g path') as HTMLElement;
        svgCar.setAttribute('id', `${win.id}-tab-svg`);
        svgCar.setAttribute('fill', carColor);
    }

    row.append(winNumber, winCar, winName, winWins, winTime);

    return row;
}
