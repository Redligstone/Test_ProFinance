import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Table } from 'antd';
import './InventoryTable.css';
import { useUpdateData } from '../../hooks/useUpdateData';
import { queryClient } from '../../api/QueryClient';
import EditableRow from './components/EditableRow/EditableRow';
import EditableCell from './components/EditableCell/EditableCell';
import { getColumns } from './helpers/getColumns';
import { calculateTotals } from './helpers/calculateTotals';
import TableFooter from './components/TableFooter/TableFooter';
import { Product } from '../../types/types';

interface InventoryTable {
    data: Product[];
}

const InventoryTable: FC<InventoryTable> = ({ data }) => {
    const [dataSource, setDataSource] = useState<Product[]>(data);
    const { mutate: updateProduct } = useUpdateData();
    const { totalQuantity, totalPrice } = useMemo(() => calculateTotals(dataSource), [dataSource]);

    const columns = getColumns();

    useEffect(() => {
        setDataSource(data);
    }, [data]);

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell
        }
    };

    const handleSave = useCallback(
        (row: Product) => {
            const newData = [...dataSource];
            const index = newData.findIndex((item) => row.id === item.id);
            const item = newData[index];
            newData.splice(index, 1, { ...item, ...row });
            setDataSource(newData);

            updateProduct(
                {
                    id: row.id,
                    updates: {
                        product_brand: row.product_brand,
                        product_name: row.product_name,
                        product_quantity: row.product_quantity,
                        price: row.price
                    }
                },
                {
                    onSuccess: () => {
                        queryClient.invalidateQueries({ queryKey: ['data'] });
                    },
                    onError: (error) => {
                        console.error('Failed to update data:', error);
                    }
                }
            );
        },
        [dataSource, updateProduct]
    );

    const mappedColumns = useMemo(
        () =>
            columns.map((col) => {
                if (!col.editable) {
                    return col;
                }
                return {
                    ...col,
                    onCell: (record: Product) => ({
                        record,
                        editable: col.editable,
                        dataIndex: col.dataIndex,
                        title: col.title,
                        handleSave
                    })
                };
            }),
        [columns, handleSave]
    );

    return (
        <Table
            className='table'
            components={components}
            bordered
            dataSource={dataSource}
            columns={mappedColumns}
            rowClassName='editable-row'
            pagination={false}
            scroll={{ y: 440 }}
            footer={() => <TableFooter totalQuantity={totalQuantity} totalPrice={totalPrice} />}
            rowKey='id'
        />
    );
};
export default InventoryTable;
