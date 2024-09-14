import { Product } from '../../../types/types';

export const getColumns = () => [
    {
        title: 'Баркод',
        dataIndex: 'barcode',
        key: 'barcode',
        sorter: (a: Product, b: Product) => a.barcode - b.barcode,
        editable: false
    },
    {
        title: 'Бренд',
        dataIndex: 'product_brand',
        key: 'product_brand',
        sorter: (a: Product, b: Product) => a.product_brand.localeCompare(b.product_brand),
        editable: true
    },
    {
        title: 'Название Продукта',
        dataIndex: 'product_name',
        key: 'product_name',
        sorter: (a: Product, b: Product) => a.product_name.localeCompare(b.product_name),
        editable: true
    },
    {
        title: 'Количество',
        dataIndex: 'product_quantity',
        key: 'product_quantity',
        sorter: (a: Product, b: Product) => a.product_quantity - b.product_quantity,
        editable: true
    },
    {
        title: 'Цена',
        dataIndex: 'price',
        key: 'price',
        sorter: (a: Product, b: Product) => a.price - b.price,
        editable: true
    }
];
