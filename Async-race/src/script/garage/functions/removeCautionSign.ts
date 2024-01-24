export function removeCautionSign(carSVG: HTMLElement): void {
    const carBlockInners = carSVG.parentElement?.childNodes as NodeList;
    if (carBlockInners.length > 1) {
        const caution = carBlockInners[1] as HTMLElement;
        caution.remove();
        const caution1 = carBlockInners[1] as HTMLElement;
        if (caution1) caution1.remove();
    }
}
