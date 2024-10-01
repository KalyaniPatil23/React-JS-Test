import React, { useState } from "react";
import './ItemForm.css';
import axios from "axios";

const ItemForm = () => {
    const [data, setData] = useState({name: '', quantity: null, unit_price: null, date: null});
    const isValid = () => {
        console.log('name in valid', data.quantity )

        if(data.name.length <= 0 || data.name > 225){
            return false;
        }
        if( data.quantity <= 0 || data.quantity > 10){
            return false;
        }
        if(data.unit_price <= 0){
            return false
        }
        if(data.date === null || data.date < new Date().toISOString().split('T')[0]){
            return false
        }
        return true
    }

    const handleItem = async() => {
        console.log(isValid())
        if(isValid()){
            let response = await axios.post('https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers', { 

                "itemDetails":{ 
            
                    "itemName":data.name, 
            
                    "quantity":data.quantity, 
            
                    "unitPrice":data.unit_price, 
            
                    "currency":"$", 
            
                    "submissionDate":data.date 
            
                }});
                console.log(response)
        }else{
            alert("Please check all the fields")
        }
    }
    return (
        <section id="item-form">
            <h1>Item Details</h1>
            <form>
                <div className="form-row">

                    <div className="input-container">
                        <b>Item Name</b> <br />
                        <input maxLength={225} type="text" placeholder="Enter item name" value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
                        <p>Max 225 characters</p>
                    </div>
                    <div className="input-container">
                        <b>Quantity</b> <br />
                        <input type="number" min={0} max={10} placeholder="Enter quantity" value={data.quantity} onChange={(e) => { setData({ ...data, quantity: e.target.value }) }} />
                        <p>Numeric value</p>
                    </div>
                </div>
                <div className="form-row section-space">
                    <div className="input-container">
                        <b>Unit Price</b> <br />
                        <input type="number" min={0} placeholder="Enter unit price" value={data.unit_price} onChange={(e) => { setData({ ...data, unit_price: e.target.value }) }} />
                        <p>Numeric value (USD)</p>
                    </div>
                    <div className="input-container">
                        <b>Date of Submission</b> <br />
                        <input
                        min={new Date().toISOString().split('T')[0]}
                        type="date" placeholder="Select date" value={data.date} onChange={(e) => { setData({ ...data, date: e.target.value }) }} />
                        <p>Format: MM/DD/YYYY</p>
                    </div>
                </div>

            </form>
            
            <div className="submit-container">
                    <h1>Submitted Data</h1>
                    <p>The data submitted by users will be displayed below</p>
                    <button onClick={handleItem}>Save Changes</button>
                </div>
        </section>
    )
}
export default ItemForm;