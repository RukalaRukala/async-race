import { buttonHTML, divHTML } from '../classes/elementBuilder';

export function addPaginationToWinners(): HTMLDivElement {
  const pageWrapper = divHTML.getElement('', 'page-wrap-win', 'wrapper') as HTMLDivElement;
  const prev = buttonHTML.getElement('<<<prev', 'prev-win', 'button pages middle') as HTMLButtonElement;
  const next = buttonHTML.getElement('next>>>', 'next-win', 'button pages middle') as HTMLButtonElement;
  pageWrapper.append(prev, next);
  return pageWrapper;
}
