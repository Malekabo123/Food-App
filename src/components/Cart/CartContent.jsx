import { useContext, useEffect, useState } from "react";
import "./CartContent.css";
import ShowCartContext from "../Contexts/show-cart-context";
import CartItem from "./CartItem";

const CartContent = (props) => {
  const showcntxt = useContext(ShowCartContext);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const totalPrice = props.cartMeals.reduce(
      (acc, meal) => acc + meal.price * meal.amount,
      0
    );
    setTotalCartPrice(totalPrice);
  }, [props.cartMeals]);

  let showOrder = props.cartMeals.length !== 0;

  return (
    <>
      <div className="modal">
        <ul>
          {props.cartMeals.map((meal) => {
            if (meal.name) {
              return (
                <CartItem
                  meal={meal}
                  key={meal.name}
                  updateCartAmount={props.updateCartAmount}
                />
              );
            }
          })}
        </ul>

        <div className="cartTotalAmount">
          <h2>Total Amount</h2>
          <span>${totalCartPrice}</span>
        </div>

        <div className="cartActions">
          <button
            id="close"
            onClick={() => {
              showcntxt.onCloseCart();
            }}
          >
            Close
          </button>
          {showOrder && (
            <button
              id="order"
              onClick={() => {
                alert("ordered");
                props.resetCart();
                showcntxt.onCloseCart();
              }}
            >
              Order
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CartContent;
