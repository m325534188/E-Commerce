// import { useDispatch } from "react-redux"
// import { useSelector } from "react-redux"
// import { addQty, decreaseQty } from "./redux/actions/productActions"
// import { addToCart, deleteFromCart, deleteTotal } from "./redux/actions/cartActions"
// import { useNavigate } from "react-router-dom"
// import { useState } from "react"
// import GoToPayment from "./GoToPayment"

// export default function Cart() {
//     const cart = useSelector((state) => state.cart)
//     const dispatch = useDispatch()
//     const navigate=useNavigate()
//     const [rander,setRander]=useState(0)
//     return (
//         <>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">שם</th>
//                         <th scope="col">מחיר</th>
//                         <th scope="col">תמונה</th>
//                         <th scope="col">הוסף</th>
//                         <th scope="col">כמות</th>
//                         <th scope="col">הפחת</th>
//                         <th scope="col">מחק</th>
//                     </tr>
//                 </thead>
//                 {cart ? cart.map((item, index) => (
//                     <tr>

//                         <td>{item.name}</td>
//                         <td>{item.price}</td>
//                         <td><img className="card-img-top" src={item.image} alt="Card image cap" style={{ width: "100px", height: "120px" }}></img></td>
//                         <td><button id="button1" type="button" className="bg-secondary" onClick={() => { dispatch(decreaseQty(item.id)); dispatch(addToCart(item)) ; setRander(rander+1) }} >+</button></td>
//                         <td>{item.qtyCart}</td>
//                         <td><button id="button2" type="button" className="bg-secondary" onClick={() => { dispatch(deleteFromCart(item)); dispatch(addQty(item.id)); setRander(rander+1) }} >-</button></td>
//                         <td><button id="button3" type="button" className="bg-secondary" onClick={() => { dispatch(deleteTotal(item)); }} >מחק</button></td>
//                     </tr>
//                 )) : <h1>העגלה ריקה</h1>}   </table>
//       <button id="button4" type="button" className="bg-secondary" onClick={() => {navigate("/GoToPayment") }}>עבור לתשלום</button>      
//       </>  
//     )
                

// }