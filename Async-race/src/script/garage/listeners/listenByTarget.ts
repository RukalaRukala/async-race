import { tagsData } from '../../data/tagsData';
import { reset } from '../functions/reset';
import { addRandomOneHundredCars } from './addRandomOneHundredCars';
import { createNewCar } from './createNewCar';
import { goToTheNextGaragePage } from './goToTheNextGaragePage';
import { goToTheNextWinPage } from './goToTheNextWinPage';
import { goToThePrevGaragePage } from './goToThePrevGaragePage';
import { goToThePrevWinPage } from './goToThePrevWinPage';
import { startGlobalRace } from './startGlobalRace';
import { updateCar } from './updateCar';

export function listenByTarget(target: HTMLElement): void {
    switch (target) {
        case tagsData.create:
            createNewCar();
            break;
        case tagsData.update:
            updateCar();
            break;
        case tagsData.generate:
            addRandomOneHundredCars();
            break;
        case tagsData.next:
            goToTheNextGaragePage();
            break;
        case tagsData.prev:
            goToThePrevGaragePage();
            break;
        case tagsData.race:
            startGlobalRace();
            break;
        case tagsData.reset:
            reset();
            break;
        case tagsData.winNext:
            goToTheNextWinPage();
            break;
        case tagsData.winPrev:
            goToThePrevWinPage();
            break;
        default:
            break;
    }
}
