import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';
import { addCarToTheServer } from '../server/addCarToTheServer';
import { getCarsFromServer } from '../server/getCarsFromServer';
import { getRandomCar } from '../utils/getRandomCar.utils';
import { getRandomColor } from '../utils/getRandomColor.utils';
import { viewCurrentPage } from './viewCurrentPage';

export async function generateOneHundredCars(): Promise<void> {
  tagsData.next.disabled = false;
    let i: number;
    for (i = 0; i < 100; i += 1) {
      const carName = getRandomCar();
      const col = getRandomColor();
      (async () => {
        addCarToTheServer({
          name: carName,
          color: col,
        });
      })();
    }
    data.carList = await getCarsFromServer();
    data.carList = data.carList.reverse();
    viewCurrentPage(+tagsData.pageNumber.innerHTML);
}
