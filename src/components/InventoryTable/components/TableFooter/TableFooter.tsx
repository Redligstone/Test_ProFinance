import { FC, memo } from 'react';
import './TableFooter.css';

interface TableFooterProps {
    totalQuantity: number;
    totalPrice: number;
}

const TableFooter: FC<TableFooterProps> = memo(({ totalQuantity, totalPrice }) => (
    <div className='table-footer'>
        <div className='table-total'>Итого:</div>
        <div className='quantity-col'>{totalQuantity}</div>
        <div className='price-col'>{totalPrice}</div>
    </div>
));

export default TableFooter;
