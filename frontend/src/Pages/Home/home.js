import React, {useState} from "react";
import ItemForm from "../../Components/Item/Itemform";
import CustomCheckbox from "../../Components/Checkbox/Checkbox";

const Home = () => {
    const [selected, setselected] = useState('Item')
    const handleChange = (e) => {
        setselected(e.target.value);
    }
    return(
        <div>
            
            <div>
                <div className="checkbox-container">
                    <CustomCheckbox value={'Item'} checked={selected === 'Item'} onChange={handleChange}/>
                    <CustomCheckbox value={'Supplier'} checked={selected === 'Supplier'}   onChange={handleChange}/>
                </div>
            </div>
            <ItemForm/>
        </div>
    )
}

export default Home;