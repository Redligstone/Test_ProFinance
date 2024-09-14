import { createContext } from 'react';
import type { FormInstance } from 'antd/es/form';

interface EditableFormValues {
    barcode?: number;
    product_brand?: string;
    product_name?: string;
    product_quantity?: number;
    price?: number;
}

export const FormContext = createContext<FormInstance<EditableFormValues> | null>(null);
