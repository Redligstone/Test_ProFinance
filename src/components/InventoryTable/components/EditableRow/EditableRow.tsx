import { Form } from 'antd';
import { FormContext } from '../../../../context/FormContext';
import { FC } from 'react';

interface EditableRowProps {
    children: React.ReactNode;
}

const EditableRow: FC<EditableRowProps> = ({ children, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <FormContext.Provider value={form}>
                <tr {...props}>{children}</tr>
            </FormContext.Provider>
        </Form>
    );
};

export default EditableRow;
