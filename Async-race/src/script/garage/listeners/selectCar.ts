import { tagsData } from '../../data/tagsData';
import { getOneCarFromServer } from '../server/getOneCarFromServer';

export function selectCar(target: HTMLElement): void {
    (async () => {
            const updateInp = tagsData.updateInput;
            const button = tagsData.update;
            const color = tagsData.updateColor;
            const car = await getOneCarFromServer(+target.id.split('-')[0]);
            button.disabled = false;
            updateInp.disabled = false;
            updateInp.value = target.nextElementSibling?.nextElementSibling?.innerHTML as string;
            color.value = car.color;
            updateInp.setAttribute('name', target.id.split('-')[0]);
    })();
}
