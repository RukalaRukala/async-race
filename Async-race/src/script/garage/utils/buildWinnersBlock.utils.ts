import { divHTML } from '../classes/elementBuilder';
import { addPaginationToWinners } from './addPaginateToWinners.utils';

export function buildWinnersBlock(): HTMLDivElement {
  const name = document.createElement('h2');
  name.innerHTML = 'Winners (<span id="win-count">0</span>)';
  const pageCountWin = document.createElement('h3');
  pageCountWin.innerHTML = 'Page #<span id="page-count">1</span>';

  const winnerWrapper = divHTML.getElement('', 'win-wrap', 'wrapper') as HTMLDivElement;
  const tabHeader = divHTML.getElement('', 'tab-head-wrap', 'tab-wrapper');
  const winTab = divHTML.getElement('', 'tab-wrap', 'tab');
  const numberH = divHTML.getElement('Number', 'num-head', 'tab-num');
  const carH = divHTML.getElement('Car', 'car-head', 'tab-car');
  const nameH = divHTML.getElement('Name', 'name-head', 'tab-name');
  const winH = divHTML.getElement('Wins', 'wins-head-ASC', 'tab-wins');
  const timeH = divHTML.getElement('Time (ms)', 'time-head-ASC', 'tab-time');
  const pagination = addPaginationToWinners();
  tabHeader.append(numberH, carH, nameH, winH, timeH);
  winnerWrapper.append(name, pageCountWin, tabHeader, winTab, pagination);

  return winnerWrapper;
}
