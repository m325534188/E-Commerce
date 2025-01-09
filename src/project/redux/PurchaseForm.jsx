import React, { useState } from "react";
import { useDispatch } from "react-redux";

import  addPurchase  from "../redux/Action/ProductAction";
import { Link } from 'react-router-dom';
import HomePage from "../HomePage";

import { useSelector } from "react-redux";


const PurchaseForm = ({ customerId }) => {
    const customers = useSelector((state) => state.customers); // שימי לב ללקוחות (customers)

    const [selectedProduct, setSelectedProduct] = useState("");
    const dispatch = useDispatch();

    const handleAddPurchase = () => {
        if (selectedProduct) {
            dispatch(addPurchase(customerId, selectedProduct));
            setSelectedProduct(""); // לנקות את הבחירה אחרי הוספה
        }
    };

    return (
        <div style={{textAlign:'center'}}>
        <div className="gallery">
  {customers.length === 0 ? (
    <p>אין נתונים להצגה</p>
  ) : (
    customers.map((item) => (
      <div className="image-item" key={item.id}>
        <img className="img" src={item.image} alt={item.name} />
        <p>{item.name}:שם</p>
        <ul>
          {item.purchases.map((purchase, index) => (
            <li key={index}>{purchase}</li>
          ))}
        </ul>
      </div>
    ))
  )}
</div>
            <button onClick={handleAddPurchase}>הוסף רכישה</button>
            <Link to='/' style={{border:'2px black'}}>home page</Link>
        </div>
    );
};

export default PurchaseForm;
