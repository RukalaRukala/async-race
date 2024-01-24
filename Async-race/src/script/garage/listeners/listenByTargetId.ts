import { sortBy } from '../functions/sortBy';
import { restartGarage } from './restartGarage';
import { switchPage } from './switchPage';

export function listenByTargetId(target: HTMLElement) {
    switch (target.id) {
        case 'win-but':
        case 'garage-but':
            switchPage(target);
            break;
        case 'wins-head-ASC':
        case 'wins-head-DESC':
            sortBy('wins');
            break;
        case 'time-head-ASC':
        case 'time-head-DESC':
            sortBy('time');
            break;
        case 'greener':
            restartGarage(target);
            break;
        default:
            break;
    }
}
