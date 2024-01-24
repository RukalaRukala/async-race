export function carIsBroken(id: number): HTMLImageElement {
    const carSVG = document.getElementById(`${id}-svg`) as HTMLElement;
    const carSvgParent = carSVG.parentElement as HTMLElement;
    const carSvgParent2 = carSvgParent.parentElement as HTMLElement;
    const caution = carSvgParent2.nextElementSibling as HTMLImageElement;

    return caution;
}
