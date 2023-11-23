import { useContext } from "react";
import CartContent from "./CartContent";
import "./CartModal.css";
import { createPortal } from "react-dom";
import ShowCartContext from "../Contexts/show-cart-context";

const CartModal = (props) => {
  const showcntxt = useContext(ShowCartContext);

  const handleClick = (e) => {
    e.preventDefault();

    showcntxt.onCloseCart();
  };

  const Backdrop = () => {
    return <div className="backdrop" onClick={handleClick}></div>;
  };

  return (
    <>
      {createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <CartContent
          cartMeals={props.cartMeals}
          resetCart={props.resetCart}
          updateCartAmount={props.updateCartAmount}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default CartModal;
