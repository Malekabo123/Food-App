import { RiDeleteBin5Line } from "react-icons/ri";

const CartItem = (props) => {
  const handleUpdateAmount = (action) => {
    if (action === "dec") {
      props.updateCartAmount(props.meal.name, "dec");
    } else {
      props.updateCartAmount(props.meal.name, "inc");
    }
  };
  return (
    <li className="cartItem">
      <div className="cartDetailsContainer">
        <h3 className="cartFoodName">{props.meal.name}</h3>
        <div className="cartPriceAmount">
          <h3 className="cartFoodPrice">${props.meal.price}</h3>
          <h3 className="itemCount">x {props.meal.amount}</h3>
        </div>
      </div>
      <div className="cartUpdateAmount">
        <button
          className="decrease"
          onClick={() => {
            handleUpdateAmount("dec");
          }}
        >
          {" "}
          {props.meal.amount === 1 ? <RiDeleteBin5Line /> : "-"}
        </button>
        <button
          className="increase"
          onClick={() => {
            handleUpdateAmount("inc");
          }}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
