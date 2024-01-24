import { buttonHTML, divHTML } from '../classes/elementBuilder';

export function buildHeader(): HTMLDivElement {
    const wrapper = divHTML.getElement('', 'header-wrap', 'wrapper') as HTMLDivElement;
    const garageButton = buttonHTML.getElement('GARAGE', 'garage-but', 'button header-but middle') as HTMLButtonElement;
    const winButton = buttonHTML.getElement('WINNERS', 'win-but', 'button header-but middle') as HTMLButtonElement;
    wrapper.append(garageButton, winButton);

    return wrapper;
}
