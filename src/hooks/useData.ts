import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../api/QueryClient';
import { getData } from '../api/api';
import { Product } from '../types/types';

interface UseDataResponse {
    data: Product[] | undefined;
}

export const useData = (): UseDataResponse => {
    const { data } = useQuery<Product[]>(
        {
            queryKey: ['data'],
            queryFn: getData
        },
        queryClient
    );

    return { data };
};
