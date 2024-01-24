// import { addToWinnersList } from './addToWinnersList';
import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';
import { getWinners } from '../server/getWinners';
import { saveOneWinner } from '../server/saveOneWinner';
import { startStopDrive } from '../server/startStopDrive';
import { carIsBroken } from './carIsBroken';
import { getCoords } from './getCoord';
import { showWinnersResult } from './showWinnersResult';

export function defineFinishTime(
    flag: HTMLDivElement,
    car: HTMLElement,
    carId: number,
    milliseconds: number,
    ): void {
    const myChecker = setInterval(() => {
        const finish = getCoords(flag).left;
        const carCover = getCoords(car).left - 66.19;
        const stopBut = document.getElementById(`${carId}-stop`) as HTMLButtonElement;
        if (carCover > finish) {
            clearInterval(myChecker);
            if (!data.isWinner) {
                data.isWinner = true;
                showWinnersResult(carId, milliseconds);
                (async () => {
                    await startStopDrive(carId, 'stopped');
                    await saveOneWinner({ id: carId, wins: 1, time: milliseconds });
                    const winners = await getWinners();
                    const quantity = winners.length;
                    const pageQuant = Math.ceil(quantity / 10);
                    tagsData.winQuantity.innerHTML = String(quantity);
                    if (+tagsData.winPage.innerHTML < pageQuant) tagsData.winNext.disabled = false;
                })();
            } else {
                (async () => {
                    await startStopDrive(carId, 'stopped');
                })();
            }
        } else if (carIsBroken(carId) || stopBut.disabled === true) {
            clearInterval(myChecker);
        }
    }, 10);
}
