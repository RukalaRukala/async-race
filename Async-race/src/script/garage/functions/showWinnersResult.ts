import { divHTML } from '../classes/elementBuilder';
import { getOneCarFromServer } from '../server/getOneCarFromServer';

export function showWinnersResult(id: number, time: number): void {
    (async () => {
      const greener = divHTML.getElement('', 'greener', 'greener') as HTMLDivElement;
      const message = divHTML.getElement('', 'win-message', 'win-message') as HTMLDivElement;
      const car = await getOneCarFromServer(id);
      message.innerHTML = `The winner is car: ${car.name}</br>Time is: ${time}`;
      greener.append(message);
      document.body.prepend(greener);
    })();
}
