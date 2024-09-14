import { FC, useContext, useEffect, useRef, useState } from 'react';
import { Form, Input, InputNumber } from 'antd';
import { FormContext } from '../../../../context/FormContext';
import type { InputRef } from 'antd';
import { Product } from '../../../../types/types';

interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof Product;
    record: Product;
    handleSave: (record: Product) => void;
}

const EditableCell: FC<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<InputRef>(null);
    const inputNumberRef = useRef<HTMLInputElement>(null);
    const form = useContext(FormContext)!;

    useEffect(() => {
        if (editing) {
            inputRef.current?.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[{ required: true, message: `Значение "${title}" не может быть пустым` }]}
            >
                {dataIndex === 'price' || dataIndex === 'product_quantity' ? (
                    <InputNumber ref={inputNumberRef} onPressEnter={save} onBlur={save} />
                ) : (
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                )}
            </Form.Item>
        ) : (
            <div className='editable-cell-value-wrap' onDoubleClick={toggleEdit}>
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

export default EditableCell;
