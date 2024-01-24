import { data } from '../../data/data';
import { IUpdateWin } from '../interfaces/updateWin.interfaces';

export async function updateWinner(id: number, values: IUpdateWin): Promise<void> {
    await fetch(`${data.urlWinners}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    });
}
