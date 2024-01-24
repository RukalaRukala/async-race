import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';
import { IWinner } from '../interfaces/winner.interfaces';

export async function getWinners(sortValue?: string, order?: string): Promise<IWinner[]> {
    let url = data.urlWinners;
    if (sortValue && order) {
        url = `${data.urlWinners}?_limit=10&_page=${+tagsData.winPage.innerHTML}&_sort=${sortValue}&_order=${order}`;
    }
    const response = await fetch(url);
    const winnerList = await response.json();

    return winnerList;
}
