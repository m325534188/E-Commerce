// ודא שהפונקציה מוגדרת כאן כראוי
const AddToCart = (purchaseId, purchasename) => ({
    type: 'ADD_TO_CART',
    payload: {
        purchaseId,
        purchasename,
    },
});

export default {
    AddToCart,
};
