
const addtocart=(Newproduct)=>{
  return{
    type:"ADD_TO_CART",
    product
  }
  const deletfromcart=(product)=>{
    return{
      type:"DELET_FROM_CART",
      product
    }
  }
  const deletall=(product)=>{
    return{
      type:"DELETE_ALL",
      product
    }
  }
}