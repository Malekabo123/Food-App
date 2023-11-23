import "./FoodList.css";
import { useState } from "react";

const FoodItem = (props) => {
  const [amount, setAmount] = useState(1);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleClick = () => {
    props.handleAdding(+amount);
    props.addItemsToCart(props.meal.name, props.meal.price, amount);
    setAmount(1);
  };

  return (
    <>
      <li className="foodItem">
        <div className="detailsContainer">
          <h3 className="foodName">{props.meal.name}</h3>
          <p className="description">{props.meal.description}</p>
          <h3 className="price">${props.meal.price}</h3>
        </div>
        <div className="amountContainer">
          <div className="amount">
            <label htmlFor="amountCount">Amount</label>
            <input
              type="number"
              min={1}
              id="amountCount"
              name="amountCount"
              className="amountCount"
              value={amount}
              onChange={handleChange}
            ></input>
          </div>
          <button className="addBtn" onClick={handleClick}>
            + Add
          </button>
        </div>
      </li>
    </>
  );
};

export default FoodItem;
