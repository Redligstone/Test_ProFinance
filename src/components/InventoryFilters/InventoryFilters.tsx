import { FC } from 'react';
import './InventoryFilters.css';
import { FilterInput } from '../FilterInput/FilterInput';
import { Button } from 'antd';
import { TbBook2 } from 'react-icons/tb';

interface InventoryFiltersProps {
    barcodeFilter: string;
    brandFilter: string;
    nameFilter: string;
    priceFilter: string;
    setBarcodeFilter: (value: string) => void;
    setBrandFilter: (value: string) => void;
    setNameFilter: (value: string) => void;
    setPriceFilter: (value: string) => void;
}

const InventoryFilters: FC<InventoryFiltersProps> = ({
    barcodeFilter,
    brandFilter,
    nameFilter,
    priceFilter,
    setBarcodeFilter,
    setBrandFilter,
    setNameFilter,
    setPriceFilter
}) => (
    <div>
        <div className='header'>
            <h1>Остатки сформированы на 01.04.2023</h1>
            <Button type='primary' className='instruction'>
                <TbBook2 />
                Инструкции
            </Button>
        </div>

        <div className='filters'>
            <FilterInput value={barcodeFilter} onChange={setBarcodeFilter} placeholder='31284' label='Баркод' />
            <FilterInput value={brandFilter} onChange={setBrandFilter} placeholder='Samsung' label='Бренд' />
            <FilterInput
                value={nameFilter}
                onChange={setNameFilter}
                placeholder='Samsung Galaxy Fold'
                label='Название'
            />
            <FilterInput
                value={priceFilter}
                onChange={setPriceFilter}
                placeholder='Samsung Galaxy Fold'
                label='Цена'
                type='select'
                options={[
                    { value: '', label: 'Все' },
                    { value: '10-50', label: 'от 10 до 50' },
                    { value: '50-100', label: 'от 50 до 100' },
                    { value: '100-500', label: 'от 100 до 500' },
                    { value: '500-1000', label: 'от 500 до 1000' },
                    { value: '1000-', label: 'от 1000' }
                ]}
            />
        </div>
    </div>
);

export default InventoryFilters;
