import { Product } from '../types/types';

export const createApplyFiltersFunction = (
    tableData: Product[],
    barcodeFilter: string,
    brandFilter: string,
    nameFilter: string,
    priceFilter: string,
    setFilteredData: React.Dispatch<React.SetStateAction<Product[]>>
) => {
    return () => {
        const [minPriceStr, maxPriceStr] = priceFilter.split('-');
        const minPrice = minPriceStr ? parseFloat(minPriceStr) : 0;
        const maxPrice = maxPriceStr ? parseFloat(maxPriceStr) : Infinity;

        const result = tableData.filter(
            (item) =>
                (barcodeFilter === '' || item.barcode?.toString().includes(barcodeFilter)) &&
                (brandFilter === '' || item.product_brand?.toLowerCase().includes(brandFilter.toLowerCase())) &&
                (nameFilter === '' || item.product_name?.toLowerCase().includes(nameFilter.toLowerCase())) &&
                (!minPrice || (item.price && item.price >= minPrice)) &&
                (!maxPrice || (item.price && item.price <= maxPrice))
        );

        setFilteredData(result);
    };
};
