export function brakeCar(auto: HTMLElement, carBreakPlace: number): void {
    const car = auto;
    car.removeAttribute('class');
    car.style.transition = '';
    car.style.transitionTimingFunction = '';
    car.style.transform = `translate(${carBreakPlace}px)`;
}
