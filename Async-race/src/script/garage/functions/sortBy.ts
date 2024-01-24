import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';
import { WinBuilder } from '../classes/winBuilder';
import { getWinners } from '../server/getWinners';

export function sortBy(value: string): void {
    (async () => {
        data.winSort = value;
        const tag = value === 'wins' ? tagsData.winWins : tagsData.winTime;
        const order = tag.id.split('-').at(-1) as string;
        const winBuilder = new WinBuilder(await getWinners(value, order));

        tagsData.winTab.innerHTML = '';
        if (order === 'ASC') {
            tag.id = `${value}-head-DESC`;
            data.winOrder = 'ASC';
        } else {
            tag.id = `${value}-head-ASC`;
            data.winOrder = 'DESC';
        }
        winBuilder.getWinners();
    })();
}
