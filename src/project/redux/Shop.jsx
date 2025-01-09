// למשוך מידע מהredux:
import { useSelector,useDispatch } from "react-redux";
import ProductAction from "./Action/ProductAction";
import AddToCart from "./Action/ProductAction";
import HomePage from "../HomePage";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect,useState } from "react";
const Shop = () => {
  
  const dispatch = useDispatch();
const customers = useSelector((state) => state.customers); 

const [purchasename,setpurchasename]=useState('')
const [purchaseId,setpurchaseId]=useState('')
const[productprice,setproductprice]=useState('')

useEffect(() => {
     getdataofcustomers();
   }, []);


   const newproduct=()=>{

const product={
  id:purchaseId,
  name:purchasename,
  price:productprice
}

}
const AddToCart = (purchaseId,purchasename) => {
  console.log(`Adding item with ID: ${purchaseId} and Name: ${purchasename} to the cart`);
  dispatch(AddToCart( purchaseId, purchasename));
}

const getdataofcustomers = async() => {
  const ataofcustomers=await axios.get(' http://localhost:5000/cart')
  const data=ataofcustomers.data
  console.log(data)
  return data
}
 

const cart=async()=>{
  const res=await axios.post('http://localhost:5000/cart')
  const data=res.data
  console.log(data)
}
return (
        <div style={{textAlign:'center'}}>
      <button onClick={cart}>Show Data</button>
      <div className="gallery">
  {customers.length === 0 ? (
    <p>אין נתונים להצגה</p>
  ) : (
    customers.map((item) => (
      <div className="image-item" key={item.id}>
        <img className="img" src={item.image} alt={item.name} />
        <p>{item.name}:שם</p>
        <button onClick={() => AddToCart(item.purchaseId, item.purchasename)}>Add To The Cart</button>
        <ul>
          {item.purchases.map((purchase, index) => (
            <li key={index}>{purchase}</li>
          ))}
        </ul>
      </div>
    ))
  )}
  
</div>
   {/* <button onClick={handleAddPurchase}>הוסף רכישה</button> */}
            <Link to='/' style={{border:'2px black'}}>home page</Link>
</div>
    );
  };

export default Shop;
