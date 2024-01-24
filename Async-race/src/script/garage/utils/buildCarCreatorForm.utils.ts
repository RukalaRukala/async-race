import { buttonHTML, divHTML, inpHTML } from '../classes/elementBuilder';

export function buildCarCreatorForm(): HTMLDivElement {
    const formWrapper = divHTML.getElement('', 'form-wrap', 'wrapper') as HTMLDivElement;
    const createWrapper = divHTML.getElement('', 'create-wrap', 'innerForm');
    const updateWrapper = divHTML.getElement('', 'update-wrap', 'innerForm');
    const buttonsWrapper = divHTML.getElement('', 'button-wrap', 'innerForm');
    const createInput = inpHTML.getElement('', 'create', 'input');
    const createColor = inpHTML.getElement('', 'create-color', 'color');
    const createButton = buttonHTML.getElement('CREATE', 'create-button', 'button form middle');
    const updateInput = inpHTML.getElement('', 'update', 'input') as HTMLInputElement;
    updateInput.disabled = true;
    const updateColor = inpHTML.getElement('', 'update-color', 'color');
    const updateButton = buttonHTML.getElement('UPDATE', 'update-button', 'button form middle') as HTMLButtonElement;
    updateButton.disabled = true;
    const raceButton = buttonHTML.getElement('RACE', 'race', 'button race-reset middle');
    const resetButton = buttonHTML.getElement('RESET', 'reset', 'button race-reset middle');
    const generateButton = buttonHTML.getElement('GENERATE CARS', 'generate', 'button generate');
    createColor.setAttribute('type', 'color');
    updateColor.setAttribute('type', 'color');
    const garageName = document.createElement('h2');
    garageName.innerHTML = 'Garage (<span id="car-num">0</span>)';
    const pageCount = document.createElement('h3');
    pageCount.innerHTML = 'Page #<span id="page-num">1</span>';
    createWrapper.append(createInput, createColor, createButton);
    updateWrapper.append(updateInput, updateColor, updateButton);
    buttonsWrapper.append(raceButton, resetButton, generateButton);
    formWrapper.append(createWrapper, updateWrapper, buttonsWrapper, garageName, pageCount);

    return formWrapper;
}
