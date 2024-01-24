import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';
import { viewCurrentPage } from '../functions/viewCurrentPage';
import { getCarsFromServer } from '../server/getCarsFromServer';
import { removeCarFromServer } from '../server/removeCarFromServer';
import { removeCarFromWinners } from '../server/removeCarFromWinners';

export function removeCar(target: HTMLElement): void {
    const carId = target.id.split('-').at(0) as string;
    const track = target.parentElement?.parentElement?.parentElement as HTMLDivElement;
    const carQuantity = +tagsData.carQuantity.innerHTML;
    (async () => {
        const page = +tagsData.pageNumber.innerHTML;
        track.remove();
        await removeCarFromServer(+carId);
        await removeCarFromWinners(+carId);
        data.carList = await getCarsFromServer();
        data.carList = data.carList.reverse();
        tagsData.carQuantity.innerHTML = String(carQuantity - 1);
        viewCurrentPage(page);
        if ((carQuantity - 1) < 8) tagsData.next.disabled = true;
        if (tagsData.garageBlock.innerHTML === '') tagsData.next.disabled = true;
    })();
}
