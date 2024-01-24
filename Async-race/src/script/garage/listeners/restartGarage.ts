import { reset } from '../functions/reset';

export function restartGarage(target: HTMLElement): void {
    target.remove();
    reset();
}
