import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';
import { viewCurrentPage } from '../functions/viewCurrentPage';
import { ICar } from '../interfaces/carServer.interfaces';
import { getCarsFromServer } from '../server/getCarsFromServer';
import { updateCarOnTheServer } from '../server/updateCarOnTheServer';

export function updateCar(): void {
    (async () => {
        const page = +tagsData.pageNumber.innerHTML;
        const updateInp = tagsData.updateInput;
        const selectedCarId = updateInp.name;
        const newCarName = updateInp.value;
        const col = tagsData.updateColor.value;
        const car: ICar = { name: newCarName, color: col };
        updateInp.disabled = true;
        tagsData.update.disabled = true;
        await updateCarOnTheServer(car, +selectedCarId);
        console.log(data.carList);
        data.carList = await getCarsFromServer();
        data.carList = data.carList.reverse();
        console.log(data.carList);
        viewCurrentPage(page);
    })();
}
