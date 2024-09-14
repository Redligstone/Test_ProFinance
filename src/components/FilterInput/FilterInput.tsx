import { FC } from 'react';
import { Input, Select } from 'antd';
import './FilterInput.css';

interface FilterInputProps {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label: string;
    type?: 'text' | 'select';
    options?: { value: string; label: string }[];
}

export const FilterInput: FC<FilterInputProps> = ({
    value,
    onChange,
    placeholder,
    label,
    type = 'text',
    options = []
}) => (
    <div className='filterInputContainer'>
        <span className='filterInputLabel'>{label}</span>
        {type === 'select' ? (
            <Select placeholder={placeholder} value={value} onChange={onChange} className='filterInput select'>
                {options.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                        {option.label}
                    </Select.Option>
                ))}
            </Select>
        ) : (
            <Input
                type='text'
                placeholder={placeholder}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                className='filterInput'
            />
        )}
    </div>
);
