import { data } from '../../data/data';
import { ICar } from '../interfaces/carServer.interfaces';

export async function addCarToTheServer(auto: ICar): Promise<Response> {
    await fetch(data.urlGarage, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(auto),
    });

    const response = await fetch(data.urlGarage);
    return response;
}
