import { ITags } from '../garage/interfaces/tagsData.interfaces';

export const tagsData: ITags = {
    garageButton: document.getElementById('garage-but') as HTMLButtonElement,
    winnerButton: document.getElementById('win-but') as HTMLButtonElement,
    garageFormer: document.getElementById('form-wrap') as HTMLDivElement,
    winnerBlock: document.getElementById('win-wrap') as HTMLDivElement,
    pagination: document.getElementById('page-wrap') as HTMLDivElement,
    garageBlock: document.getElementById('garage') as HTMLDivElement,
    create: document.getElementById('create-button') as HTMLButtonElement,
    update: document.getElementById('update-button') as HTMLButtonElement,
    createInput: document.getElementById('create') as HTMLInputElement,
    createColor: document.getElementById('create-color') as HTMLInputElement,
    updateInput: document.getElementById('update') as HTMLInputElement,
    updateColor: document.getElementById('update-color') as HTMLInputElement,
    generate: document.getElementById('generate') as HTMLButtonElement,
    carQuantity: document.getElementById('car-num') as HTMLSpanElement,
    pageNumber: document.getElementById('page-num') as HTMLSpanElement,
    next: document.getElementById('next') as HTMLButtonElement,
    prev: document.getElementById('prev') as HTMLButtonElement,
    drive: document.querySelector('.drive') as HTMLButtonElement,
    stop: document.querySelector('.stop') as HTMLButtonElement,
    race: document.getElementById('race') as HTMLButtonElement,
    reset: document.getElementById('reset') as HTMLButtonElement,
    winTab: document.getElementById('tab-wrap') as HTMLDivElement,
    winQuantity: document.getElementById('win-count') as HTMLDivElement,
    winPage: document.getElementById('page-count') as HTMLDivElement,
    winWins: document.getElementById('wins-head-ASC') as HTMLDivElement,
    winTime: document.getElementById('time-head-ASC') as HTMLDivElement,
    winNext: document.getElementById('next-win') as HTMLButtonElement,
    winPrev: document.getElementById('prev-win') as HTMLButtonElement,
    form(): void {
      this.garageButton = document.getElementById('garage-but') as HTMLButtonElement;
      this.winnerButton = document.getElementById('win-but') as HTMLButtonElement;
      this.garageFormer = document.getElementById('form-wrap') as HTMLDivElement;
      this.winnerBlock = document.getElementById('win-wrap') as HTMLDivElement;
      this.pagination = document.getElementById('page-wrap') as HTMLDivElement;
      this.garageBlock = document.getElementById('garage') as HTMLDivElement;
      this.create = document.getElementById('create-button') as HTMLButtonElement;
      this.update = document.getElementById('update-button') as HTMLButtonElement;
      this.createInput = document.getElementById('create') as HTMLInputElement;
      this.createColor = document.getElementById('create-color') as HTMLInputElement;
      this.updateInput = document.getElementById('update') as HTMLInputElement;
      this.updateColor = document.getElementById('update-color') as HTMLInputElement;
      this.generate = document.getElementById('generate') as HTMLButtonElement;
      this.carQuantity = document.getElementById('car-num') as HTMLSpanElement;
      this.next = document.getElementById('next') as HTMLButtonElement;
      this.prev = document.getElementById('prev') as HTMLButtonElement;
      this.pageNumber = document.getElementById('page-num') as HTMLSpanElement;
      this.drive = document.querySelector('.drive') as HTMLButtonElement;
      this.stop = document.getElementById('.stop') as HTMLButtonElement;
      this.race = document.getElementById('race') as HTMLButtonElement;
      this.reset = document.getElementById('reset') as HTMLButtonElement;
      this.winTab = document.getElementById('tab-wrap') as HTMLDivElement;
      this.winQuantity = document.getElementById('win-count') as HTMLDivElement;
      this.winPage = document.getElementById('page-count') as HTMLDivElement;
      this.winWins = document.getElementById('wins-head-ASC') as HTMLDivElement;
      this.winTime = document.getElementById('time-head-ASC') as HTMLDivElement;
      this.winNext = document.getElementById('next-win') as HTMLButtonElement;
      this.winPrev = document.getElementById('prev-win') as HTMLButtonElement;
    },
};
