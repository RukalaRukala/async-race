import { data } from '../../data/data';
import { IDrive } from '../interfaces/drive.interfaces';
import { IVelocity } from '../interfaces/velocity.interfaces';

export async function startStopDrive(id: number, status: string): Promise<IVelocity | IDrive> {
    const response = await fetch(`${data.urlEngine}?id=${id}&status=${status}`, {
        method: 'PATCH',
    });
    return response.json();
}
