import { CarStarter } from '../garage/classes/carStarter';
import { IData } from '../garage/interfaces/data.interfaces';

export const data: IData = {
    urlGarage: 'http://127.0.0.1:3000/garage',
    urlEngine: 'http://127.0.0.1:3000/engine',
    urlWinners: 'http://127.0.0.1:3000/winners',
    carCounter: 0,
    carList: [],
    sepCarList: [[new CarStarter('Car', 'Color', 0)]],
    winners: [],
    isWinner: false,
    winSort: 'id',
    winOrder: 'ASC',
};
