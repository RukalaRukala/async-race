import { ICoordinates } from '../interfaces/coordinates.interfaces';

export function getCoords(elem: HTMLElement): ICoordinates {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + window.scrollY,
    right: box.right + window.scrollX,
    bottom: box.bottom + window.scrollY,
    left: box.left + window.scrollX,
  };
}
