import { useEffect, useState } from 'react';
import './InventoryPage.css';
import { useData } from '../../hooks/useData';
import InventoryTable from '../../components/InventoryTable/InventoryTable';
import InventoryFilters from '../../components/InventoryFilters/InventoryFilters';
import { createApplyFiltersFunction } from '../../utils/createApplyFilterFunction';
import InventoryActions from '../../components/InventoryActions/InventoryActions';
import Account from '../../components/Account/Account';
import { Col, Row } from 'antd';
import Menu from '../../components/Menu/Menu';
import { Product } from '../../types/types';

const InventoryPage = () => {
    const { data } = useData();

    const [tableData, setTableData] = useState<Product[]>([]);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);

    const [filteredData, setFilteredData] = useState<Product[]>([]);
    const [barcodeFilter, setBarcodeFilter] = useState<string>('');
    const [brandFilter, setBrandFilter] = useState<string>('');
    const [nameFilter, setNameFilter] = useState<string>('');
    const [priceFilter, setPriceFilter] = useState<string>('');

    const applyFilters =
        tableData.length > 0
            ? createApplyFiltersFunction(
                  tableData,
                  barcodeFilter,
                  brandFilter,
                  nameFilter,
                  priceFilter,
                  setFilteredData
              )
            : () => {};

    const handleAddData = () => {
        if (data && !dataLoaded) {
            setTableData([...data]);
            setFilteredData([...data]);
            setDataLoaded(true);
        }
    };
    const handleClearData = () => {
        if (tableData) {
            setDataLoaded(false);
            setTableData([]);
            setFilteredData([]);
        }
    };
    useEffect(() => {
        if (dataLoaded && data) {
            setTableData([...data]);
        }
    }, [dataLoaded, data]);

    return (
        <Row gutter={0} className='wrapper'>
            <Col span={6} xl={6} md={6} sm={6} xs={24} className='side-menu'>
                <Menu />
            </Col>
            <Col span={18} xl={18} md={18} sm={18} xs={24} className='main-content'>
                {' '}
                <Account />
                <InventoryFilters
                    barcodeFilter={barcodeFilter}
                    brandFilter={brandFilter}
                    nameFilter={nameFilter}
                    setBarcodeFilter={setBarcodeFilter}
                    setBrandFilter={setBrandFilter}
                    setNameFilter={setNameFilter}
                    priceFilter={priceFilter}
                    setPriceFilter={setPriceFilter}
                />
                <InventoryActions
                    data={filteredData}
                    handleAddData={handleAddData}
                    applyFilters={applyFilters}
                    handleClearData={handleClearData}
                />
                <InventoryTable data={filteredData} />
            </Col>
        </Row>
    );
};

export default InventoryPage;
