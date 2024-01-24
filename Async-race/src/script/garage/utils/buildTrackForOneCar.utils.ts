import { buttonHTML, divHTML } from '../classes/elementBuilder';
import { carSVG } from '../../data/carSVG';
import { flagSVG } from '../../data/flagSVG';

export function buildTrackForOneCar(model: string, color: string, id: number): HTMLDivElement {
    const wrapper = divHTML.getElement('', 'wrapper', 'wrapper') as HTMLDivElement;
    const blocksWrapper = divHTML.getElement('', 'block', 'block') as HTMLDivElement;
    const firstBlock = divHTML.getElement('', 'first', 'inner') as HTMLDivElement;
    const secondBlock = divHTML.getElement('', 'second', 'inner') as HTMLDivElement;
    const select = buttonHTML.getElement('SELECT', `${id}-select`, 'button changer middle select') as HTMLButtonElement;
    const remove = buttonHTML.getElement('REMOVE', `${id}-remove`, 'button changer middle remove') as HTMLButtonElement;
    const carModel = divHTML.getElement(model, `${id}-model`, 'model') as HTMLDivElement;
    const drive = buttonHTML.getElement('A', `${id}-drive`, 'button start-stop drive') as HTMLButtonElement;
    const stop = buttonHTML.getElement('B', `${id}-stop`, 'button start-stop stop') as HTMLButtonElement;
    const carBox = divHTML.getElement('', 'car', 'car') as HTMLDivElement;
    const flagBox = divHTML.getElement('', `${id}-flag`, 'flag') as HTMLDivElement;
    flagBox.innerHTML = flagSVG;
    carBox.innerHTML = carSVG;
    if (carBox.querySelector('#car-svg g')) {
        const svgCar = carBox.querySelector('#car-svg g path') as HTMLElement;
        svgCar.setAttribute('id', `${id}-svg`);
        svgCar.setAttribute('fill', color);
    }
    firstBlock.append(select, remove, carModel);
    secondBlock.append(drive, stop, carBox);
    blocksWrapper.append(firstBlock, secondBlock);
    wrapper.append(blocksWrapper, flagBox);

    return wrapper;
}
