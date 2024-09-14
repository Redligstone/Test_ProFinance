import { Product, UpdateProductArgs } from '../types/types';
import { validateResponse } from './validateResponse';

export const getData = (): Promise<Product[]> =>
    fetch(`api/data`)
        .then(validateResponse)
        .then((res) => res.json());

export const updateProduct = ({ id, updates }: UpdateProductArgs): Promise<void> =>
    fetch(`api/data/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
    })
        .then(validateResponse)
        .then((res) => res.json());
