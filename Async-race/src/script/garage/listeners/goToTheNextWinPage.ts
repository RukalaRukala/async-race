import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';
import { WinBuilder } from '../classes/winBuilder';
import { getWinners } from '../server/getWinners';

export function goToTheNextWinPage() {
    const pageQuantity = Math.ceil(+tagsData.winQuantity.innerHTML / 10);
    tagsData.winPage.innerHTML = `${+tagsData.winPage.innerHTML + 1}`;
    tagsData.winPrev.disabled = false;
    if (+tagsData.winPage.innerHTML === pageQuantity) tagsData.winNext.disabled = true;

    (async () => {
        const winners = await getWinners(data.winSort, data.winOrder);
        const winBuilder = new WinBuilder(winners);
        winBuilder.getWinners();
    })();
}
