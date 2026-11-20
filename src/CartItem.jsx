import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      // Remove any dollar sign or extra characters and parse numeric float
      const costNumber = parseFloat(item.cost.toString().replace('$', ''));
      total += costNumber * item.quantity;
    });
    return total.toFixed(2);
  };

  // Calculate total cost based on quantity for an individual item
  const calculateTotalCost = (item) => {
    const costNumber = parseFloat(item.cost.toString().replace('$', ''));
    return (costNumber * item.quantity).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleCheckoutShopping = (e) => {
    if (e) e.preventDefault();
    alert('Functionality to be added for future reference: Checkout Coming Soon!');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Botanical Shopping Cart</h2>
      <div className="cart-summary-box">
        <h3 className="cart-total-amount">Total Cart Amount: ${calculateTotalAmount()}</h3>
        <h4 className="cart-total-quantity">Total Plants in Cart: {totalQuantity}</h4>
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty-message">
          <p>Your cart is currently empty! Add some lush plants to make your home vibrant.</p>
          <button className="get-started-button" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="cart-items-list">
            {cart.map((item) => (
              <div className="cart-item-card" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-cost">Unit Price: {item.cost}</div>
                  <div className="cart-item-quantity-container">
                    <button
                      className="cart-item-button cart-item-button-dec"
                      onClick={() => handleDecrement(item)}
                    >
                      -
                    </button>
                    <span className="cart-item-quantity-value">{item.quantity}</span>
                    <button
                      className="cart-item-button cart-item-button-inc"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">Subtotal: ${calculateTotalCost(item)}</div>
                  <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="continue_shopping_btn">
            <button className="get-started-button" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            <button className="get-started-button checkout-btn" onClick={handleCheckoutShopping}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
