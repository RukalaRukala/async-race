import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';
import { viewCurrentPage } from '../functions/viewCurrentPage';
import { addCarToTheServer } from '../server/addCarToTheServer';
import { getCarQuantity } from '../server/getCarQuantity';
import { getCarsFromServer } from '../server/getCarsFromServer';

export function createNewCar(): void {
    (async () => {
        const input = tagsData.createInput;
        const col = tagsData.createColor;
        const carName = input.value;
        await addCarToTheServer({ name: carName, color: col.value });
        data.carList = await getCarsFromServer();
        const carQuant = await getCarQuantity();
        const pageNum = +tagsData.pageNumber.innerHTML;
        const newPageNum = Math.ceil(carQuant / 7);
        if (newPageNum > pageNum) tagsData.next.disabled = false;
        tagsData.carQuantity.innerHTML = String(carQuant);
        data.carList = data.carList.reverse();
        viewCurrentPage((pageNum));
    })();
}
