import React, { useState } from 'react';

interface CheckboxProps {
    checked: boolean;
    defaultChecked: boolean;
    disabled: boolean;
    indeterminate: boolean;
    onChange: (val: boolean) => void
}

const Checkbox = ({ checked, onChange }: Pick<CheckboxProps, 'checked' | 'onChange'>) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        onChange(e.target.checked);
    }
    const [isChecked, setIsChecked] = useState(checked);
    return (
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
    )
}

export default Checkbox;