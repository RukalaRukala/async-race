import { data } from '../../data/data';

export async function removeCarFromServer(id: number): Promise<void> {
    await fetch(`${data.urlGarage}/${id}`, {
        method: 'DELETE',
    });
}
