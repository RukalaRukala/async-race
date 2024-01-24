import '../../../assets/images/car.svg';
import { IBuilder } from '../interfaces/builder.interfaces';

class ElementBuilder implements IBuilder {
    private tag: string;

    constructor(tag: string) {
        this.tag = tag;
    }

    getElement(text: string, id: string, klass: string, tag: string = this.tag): HTMLElement {
        let element = document.createElement(tag);
        if (tag === 'div') {
            element = element as HTMLDivElement;
        } else if (tag === 'button') {
            element = element as HTMLButtonElement;
        } else {
            element = element as HTMLImageElement;
        }
        element.setAttribute('id', id);
        element.setAttribute('class', klass);
        element.textContent = text;
        return element;
    }
}

export const buttonHTML = new ElementBuilder('button');
export const divHTML = new ElementBuilder('div');
export const inpHTML = new ElementBuilder('input');
