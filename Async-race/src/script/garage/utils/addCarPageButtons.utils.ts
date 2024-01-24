import { buttonHTML, divHTML } from '../classes/elementBuilder';

export function addCarPageButtons(): HTMLDivElement {
  const pageWrapper = divHTML.getElement('', 'page-wrap', 'wrapper') as HTMLDivElement;
  const prev = buttonHTML.getElement('<<<prev', 'prev', 'button pages middle') as HTMLButtonElement;
  const next = buttonHTML.getElement('next>>>', 'next', 'button pages middle') as HTMLButtonElement;
  pageWrapper.append(prev, next);
  prev.disabled = true;
  return pageWrapper;
}
