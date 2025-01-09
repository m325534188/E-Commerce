

import React from "react";
import { useDispatch } from "react-redux";
import { addPurchase } from "./actions/purchaseActions";

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const handlePurchase = () => {
        // צרי אובייקט של הרכישה
        const purchaseData = {
            productId: product.id,
            productName: product.name,
            price: product.price,
            customer: "CustomerName", // את יכולה להוסיף כאן מידע דינאמי מהמשתמש
            date: new Date().toISOString(),
        };

        // שלחי את הפעולה ל-Redux
        dispatch(addPurchase(purchaseData));
    };


    
    return (
        <div>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handlePurchase(product, 2)}>Add to Purchase</button>

   
        </div>
    );
};

export default Product;

