import { data } from '../../data/data';
import { IWinner } from '../interfaces/winner.interfaces';

export async function getOneWinner(id: number): Promise<IWinner> {
  const response = await fetch(`${data.urlWinners}/${id}`);
  return response.json();
}
