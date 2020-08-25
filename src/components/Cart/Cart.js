import React from 'react';
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i=0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price; 
    }
    let shipping =0;
    if(total > 35){
        shipping = 0;
    }

    else if(total > 15){
        shipping = 12.99;
    }
    else if(total > 0){
    shipping = 4.99
    }
    const tax =Math.round(total/10);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Odered: {cart.length}</p>
            <p>Product Price:{total}</p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <p><small>Tax+Vat:{tax}</small></p>
            <p>Total Price: {total+shipping+tax}</p>
                
        
        </div>
    );
};

export default Cart;