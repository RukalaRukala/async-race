import { data } from '../../data/data';
import { ICar } from '../interfaces/carServer.interfaces';

export async function updateCarOnTheServer(auto: ICar, id: number): Promise<void> {
    await fetch(`${data.urlGarage}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(auto),
    });
}
