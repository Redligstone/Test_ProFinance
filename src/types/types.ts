export interface Product {
    id: number;
    barcode: number;
    product_brand: string;
    product_name: string;
    product_quantity: number;
    price: number;
}

export interface UpdateProductArgs {
    id: number;
    updates: Partial<{
        product_brand: string;
        product_name: string;
        product_quantity: number;
        price: number;
    }>;
}
