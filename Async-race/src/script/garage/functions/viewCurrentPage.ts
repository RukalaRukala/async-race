import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';

export function viewCurrentPage(pageNumber: number): void {
    const first = (pageNumber - 1) * 7;
    const last = first + 7;
    tagsData.garageBlock.innerHTML = '';
    data.carList.slice(first, last).forEach((auto) => {
        const track = auto.getTrack() as HTMLDivElement;
        tagsData.garageBlock.append(track);
    });
}
