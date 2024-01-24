import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';
import { WinBuilder } from '../classes/winBuilder';
import { getWinners } from '../server/getWinners';

export function switchPage(targ: HTMLElement): void {
        const garForm = tagsData.garageFormer;
        const winBlock = tagsData.winnerBlock;
        const garage = tagsData.garageBlock;
        const pageButtons = tagsData.pagination;
        const target = targ as HTMLButtonElement;
        if (target.id === 'win-but') {
            garForm.style.left = '-500%';
            winBlock.style.left = '0';
            garage.style.left = '-500%';
            pageButtons.style.left = '-500%';
            if (+tagsData.winPage.innerHTML === 1) tagsData.winPrev.disabled = true;
            data.winSort = 'id';
            data.winOrder = 'ASC';
            (async () => {
                const quantity = (await getWinners()).length;
                const winners = await getWinners('id', 'ASC');
                const winBuilder = new WinBuilder(winners);
                winBuilder.getWinners();
                tagsData.winQuantity.innerHTML = `${quantity}`;
            })();
        }
        if (target.id === 'garage-but') {
            winBlock.style.left = '-500%';
            garForm.style.left = '0';
            garage.style.left = '0';
            pageButtons.style.left = '0';
        }
}
