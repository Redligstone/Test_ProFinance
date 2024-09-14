import { useMutation } from '@tanstack/react-query';
import { updateProduct } from '../api/api';
import { queryClient } from '../api/QueryClient';

export const useUpdateData = () => {
    return useMutation(
        {
            mutationFn: updateProduct,
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['data'] });
            }
        },
        queryClient
    );
};
