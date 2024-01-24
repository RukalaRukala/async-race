import { data } from '../../data/data';

export async function removeCarFromWinners(id: number): Promise<void> {
    await fetch(`${data.urlWinners}/${id}`, {
        method: 'DELETE',
    });
}
