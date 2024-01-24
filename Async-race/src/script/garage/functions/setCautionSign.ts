import { cautionSVG } from '../../data/cautionSVG';

export function setCautionSign(carDiv: HTMLDivElement, carBreakPlace: number): void {
    const carBlock = carDiv;
    carBlock.innerHTML += cautionSVG;
    const caution = carBlock.lastChild as HTMLElement;
    caution.style.position = 'absolute';
    caution.style.width = '20px';
    caution.style.height = '20px';
    caution.style.left = `${carBreakPlace - 10}px`;
    caution.style.bottom = '5px';
}
