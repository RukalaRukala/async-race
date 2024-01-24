import { startTrack } from './startTrack';
import { stopTrack } from './stopTrack';

export function listenByClassName(target: HTMLElement) {
    switch (target.className) {
        case 'button start-stop drive':
            startTrack(target);
            break;
        case 'button start-stop stop':
            stopTrack(target);
            break;
        default:
            break;
    }
}
