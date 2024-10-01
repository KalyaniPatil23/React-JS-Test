import React, { useState } from "react";
import './header.css';
import CustomCheckbox from "../../Components/Checkbox/Checkbox";

const Header = () => {
    

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
        </header>
    )
}

export default Header;