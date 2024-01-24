import { data } from '../../data/data';
import { ICarResp } from '../interfaces/carResp.interfaces';

export async function getOneCarFromServer(id: number): Promise<ICarResp> {
    const response = await fetch(`${data.urlGarage}/${id}`);
    return response.json();
}
