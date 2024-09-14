import { FC, useState } from 'react';
import { Modal, Button, notification } from 'antd';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import { PiExportLight } from 'react-icons/pi';
import './ExportButton.css';
import { Product } from '../../types/types';

interface ExportButtonProps {
    data: Product[];
}

const ExportButton: FC<ExportButtonProps> = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleExport = (format: string) => {
        if (!data || data.length === 0) {
            notification.error({
                message: 'Ошибка экспорта',
                description: 'Нет данных для экспорта'
            });
            return;
        }
        if (format === 'json') {
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            saveAs(blob, 'data.json');
        } else if (format === 'csv') {
            try {
                const csv = Papa.unparse(data, {
                    header: true
                });
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                saveAs(blob, 'data.csv');
            } catch (error) {
                console.error('Error generating CSV:', error);
            }
        }
        setIsModalOpen(false);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type='primary' onClick={showModal} className='custom-button'>
                <PiExportLight />
                Экспорт
            </Button>
            <Modal title='Выберите формат экспорта' open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Button onClick={() => handleExport('json')} style={{ marginRight: 8 }}>
                    Экспорт JSON
                </Button>
                <Button onClick={() => handleExport('csv')}>Экспорт CSV</Button>
            </Modal>
        </>
    );
};

export default ExportButton;
