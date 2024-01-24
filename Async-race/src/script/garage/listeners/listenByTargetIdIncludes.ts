import { removeCar } from './removeCar';
import { selectCar } from './selectCar';

export function listenByTargetIdIncludes(target: HTMLElement) {
    if (target.id.includes('select')) selectCar(target);
    if (target.id.includes('remove')) removeCar(target);
}
