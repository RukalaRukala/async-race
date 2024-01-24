import { ICarStarter } from './carStarter.interfaces';
import { IWinner } from './winner.interfaces';

export interface IData {
    urlGarage: string;
    urlEngine: string;
    urlWinners: string;
    carCounter: number;
    carList: ICarStarter[];
    sepCarList: Array<ICarStarter[]>;
    winners: IWinner[];
    isWinner: boolean;
    winSort: string;
    winOrder: string;
}
