import { data } from '../../data/data';
import { IWinner } from '../interfaces/winner.interfaces';
import { getOneWinner } from './getOneWinner';
import { updateWinner } from './updateWinner';

export async function saveOneWinner(auto: IWinner): Promise<Response | void> {
    const response = await fetch(data.urlWinners, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(auto),
    });

      if (!response.ok) {
        const oldResult = await getOneWinner(auto.id);
        const newWins = oldResult.wins + 1;
        const newTime = oldResult.time < auto.time ? oldResult.time : auto.time;
        await updateWinner(auto.id, { wins: newWins, time: newTime });
      }
      return response;
}
