import { data } from '../data/data';
import { tagsData } from '../data/tagsData';
import { GarageFormer } from '../garage/classes/garageFormer';
import { addListeners } from '../garage/listeners/addListeners';
import { addCarPageButtons } from '../garage/utils/addCarPageButtons.utils';
import { buildCarCreatorForm } from '../garage/utils/buildCarCreatorForm.utils';
import { buildHeader } from '../garage/utils/buildHeader.utils';
import { buildWinnersBlock } from '../garage/utils/buildWinnersBlock.utils';
import { getCarsFromServer } from '../garage/server/getCarsFromServer';
import { IPage } from '../garage/interfaces/app.interfaces';
import { quantity } from '../data/carQuantity';
import { getCarQuantity } from '../garage/server/getCarQuantity';

export class App implements IPage {
    header: HTMLDivElement;

    creatorForm: HTMLDivElement;

    winBlock: HTMLDivElement;

    pagination: HTMLDivElement;

    constructor(pagination: HTMLDivElement) {
      this.header = buildHeader();
      this.creatorForm = buildCarCreatorForm();
      this.winBlock = buildWinnersBlock();
      this.pagination = pagination;
    }

    async run(): Promise<void> {
        quantity.totalCarQuantity = await getCarQuantity();
        data.carList = await getCarsFromServer();
        const garage = new GarageFormer(data.carList);
        [
          this.header,
          this.creatorForm,
          this.winBlock,
          this.pagination,
          garage.form(),
        ]
        .forEach((block) => {
          document.body.append(block);
        });
        tagsData.form();
        tagsData.carQuantity.innerHTML = String(data.carList.length);
        addListeners();
      }
}

export const app = new App(addCarPageButtons());
