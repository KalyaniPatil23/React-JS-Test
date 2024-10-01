import React, { useState } from "react";
import './header.css';
import CustomCheckbox from "../../Components/Checkbox/Checkbox";

const Header = () => {
    const [selected, setselected] = useState('Item')
    const handleChange = (e) => {
        console.log(e.target.value);
        setselected(e.target.value);
    }

    return(
        <header id="heder-container">
            <div className="top-header">
                <div className="header-title">
                    <div className="circle">
                    </div>
                    <h2>Inventory Management System</h2>
                </div>
                <div>
                    <p>Home</p>
                </div>
            </div>
            <div>
                <div className="checkbox-container">
                    <CustomCheckbox value={'Item'} checked={selected === 'Item'} onChange={handleChange}/>
                    <CustomCheckbox value={'Supplier'} checked={selected === 'Supplier'}   onChange={handleChange}/>
                </div>
            </div>
        </header>
    )
}

export default Header;