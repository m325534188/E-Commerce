

import img1 from '../../image/bracelet-diamonds.webp';
import img2 from '../../image/צמיד טניס.webp';
import img3 from '../../image/צמיד יהלומים.webp';
// import img4 from '../../image/עגילי ויולטו פנינה.webp';
// import img5 from '../../image/עגילי חישוק האגי.webp';
// import img6 from '../../image/עגילי מיני ויולטו.webp';
// import img7 from '../../image/עגילי ויולטו קונטור.webp';
// import img8 from '../../image/עגילי פרח.webp';
import img9 from '../../image/צמיד יהלומים.webp';
import img10 from '../../image/צמיד קשיח.jpg';
import img11 from '../../image/צמיד טניס מפלדת.jpg';
import img12 from '../../image/צמיד בציפוי שחור.jpg';
import img13 from '../../image/צמיד טניס רוז גולד.jpg';

const initialState = {
    customers: [  
         { id: 1, name:" צמיד יהלומים", purchases: [],image:img1,qtyCart:0 },
         { id: 2, name: "bracelet-diamonds", purchases: [] ,image:img2,qtyCart:0},
         { id: 3, name: "צמיד טניס.", purchases: [] ,image:img3,qtyCart:0},      
            { id: 9, name:"צמיד יהלומים", purchases: [],image:img9,qtyCart:0 },
             {id: 10, name:"צמיד קשיח", purchases: [],image:img10,qtyCart:0 },
            {id: 11, name:"צמיד טניס מפלדת", purchases: [],image:img11,qtyCart:0 },
            {id: 12, name:"צמיד  בציפוי שחור", purchases: [],image:img12,qtyCart:0 },
            {id: 13, name:"צמיד  טניס רוז גולד ", purchases: [],image:img13,qtyCart:0 },


    ],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                customers: state.customers.map(customer =>
                    customer.id === action.payload.customerId
                    
                        ? {
                            ...customer,
                            purchases: [...customer.purchases, action.payload.purchases],
                        }
                        : customer
                ),
            };
        default:
            return state;
    }
};

export default productReducer;
