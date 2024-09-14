import { FC } from 'react';
import ExportButton from '../../components/ExportButton/ExportButton';
import { RiFolderTransferFill } from 'react-icons/ri';
import { BiSolidFolderPlus } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { Button } from 'antd';
import './InventoryActions.css';
import { Product } from '../../types/types';

interface InventoryActionsProps {
    data: Product[];
    handleAddData: () => void;
    applyFilters: () => void;
    handleClearData: () => void;
}

const InventoryActions: FC<InventoryActionsProps> = ({ data, handleAddData, applyFilters, handleClearData }) => {
    return (
        <div className='actions'>
            <div className='action-buttons'>
                <Button onClick={applyFilters} type='primary' className='action-button'>
                    Сформировать
                </Button>
                <ExportButton data={data} />
            </div>
            <div className='data-buttons'>
                <div className='data-buttons-helpful'>
                    <button onClick={handleAddData} className='data-button'>
                        <RiFolderTransferFill />
                        Загрузить данные из cvs
                    </button>
                    <button className='data-button'>
                        <BiSolidFolderPlus />
                        Изменить данные
                    </button>
                </div>
                <div className='data-buttons-clear'>
                    <button className='data-button clear' onClick={handleClearData}>
                        Очистить <IoClose />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryActions;
