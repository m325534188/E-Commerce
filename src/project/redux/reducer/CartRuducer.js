
const initialState = []
const userReducer=(state=initialState,action)=>{
    switch(action.type){
       case "ADD_TO_CART":
        action.newProduct.qtyCart++
            if (action.newProduct.qtyCart > 1) {
                return state
            }
            return [...state, action.newProduct]
            
        case "DELET_FROM_CART":
            action.newProduct.qtyCart--
            if (action.newProduct.qtyCart > 0) {
                return state
            }
            return state.filter(product => product.id !== action.product)

        case "DELETE_ALL":
            return state.filter(product => product.id !== action.product)

        default:
            return state
    
    }
       
}
