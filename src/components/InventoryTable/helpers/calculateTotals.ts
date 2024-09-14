import { Product } from '../../../types/types';

export const calculateTotals = (dataSource: Product[]) => {
    const totalQuantity = dataSource.reduce((acc, item) => acc + (item.product_quantity || 0), 0);
    const totalPrice = dataSource.reduce((acc, item) => acc + (item.price || 0), 0);
    return { totalQuantity, totalPrice };
};
