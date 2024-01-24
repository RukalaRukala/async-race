import { listenByTarget } from './listenByTarget';
import { listenByTargetId } from './listenByTargetId';
import { listenByClassName } from './listenByClassName';
import { listenByTargetIdIncludes } from './listenByTargetIdIncludes';

export function addListeners(): void {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        listenByTarget(target);
        listenByTargetId(target);
        listenByClassName(target);
        listenByTargetIdIncludes(target);
    });
}
