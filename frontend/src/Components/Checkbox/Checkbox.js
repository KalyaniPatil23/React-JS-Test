import React from "react";
import './checkbox.css';

const CustomCheckbox = ({checked, value, onChange }) => {
    return (
        <div id="custom-checkbox">
            <input
            value={value}
            checked={checked}
                onChange={onChange}
                type="checkbox" />
            <label>{value}</label>
        </div>
    )
}

export default CustomCheckbox