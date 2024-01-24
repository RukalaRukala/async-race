import { tagsData } from '../../data/tagsData';
import { IWinListBuilder } from '../interfaces/winListBuilder.interfaces';
import { IWinner } from '../interfaces/winner.interfaces';
import { buildWinRow } from '../utils/buildWinRow.utils';

export class WinBuilder implements IWinListBuilder {
    private winnersResp: IWinner[];

    private index: number;

    constructor(winnersResp: IWinner[]) {
        this.winnersResp = winnersResp;
        this.index = 1;
    }

    getWinners(): void {
      const tenWinnersPlus = (+tagsData.winPage.innerHTML - 1) * 10;
      tagsData.winTab.innerHTML = '';
        this.winnersResp.forEach(async (win, i) => {
            const row = await buildWinRow(win, i + 1 + tenWinnersPlus);
            tagsData.winTab.append(row);
        });
    }
}
