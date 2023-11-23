import "./FoodList.css";
import FoodItem from "./FoodItem";
import CartModal from "../Cart/CartModal";
import ShowCartContext from "../Contexts/show-cart-context";
import { useEffect, useState, useContext } from "react";

const FoodList = (props) => {
  const [slide, setSlide] = useState("");
  const [cartMeals, setCartMeals] = useState([]);

  const showcntxt = useContext(ShowCartContext);

  useEffect(() => {
    slide === "" ? setSlide("slideClass") : setSlide("");
  }, []);

  const meals = [
    {
      name: "Burger",
      description: "Mayonnaise, pickles, BBQ sauce",
      price: 15,
    },
    {
      name: "Pizza",
      description: "Cimozzarella cheese, sausage, mushroom, corn, tomatoyi",
      price: 38,
    },
    {
      name: "Spaghetti",
      description: "Chicken, cream, mushroom",
      price: 22,
    },
  ];

  const addItemsToCart = (name, price, amount) => {
    const newMeal = {
      name: name,
      price: +price,
      amount: +amount,
    };

    const itemIndex = cartMeals.findIndex((item) => item.name === newMeal.name);

    if (itemIndex !== -1) {
      // If the item is already in the cart, update the amount
      const updatedCartMeals = [...cartMeals];
      updatedCartMeals[itemIndex].amount += newMeal.amount;
      setCartMeals(updatedCartMeals);
    } else {
      // If the item is not in the cart, add it
      setCartMeals([...cartMeals, newMeal]);
    }
  };

  const updateCartAmount = (name, action) => {
    const itemIndex = cartMeals.findIndex((item) => item.name === name);

    let updatedCartMeals = [...cartMeals];
    action === "dec"
      ? (updatedCartMeals[itemIndex].amount -= 1)
      : (updatedCartMeals[itemIndex].amount += 1);

    if (updatedCartMeals[itemIndex].amount === 0) {
      updatedCartMeals = updatedCartMeals.filter(
        (item) => item !== updatedCartMeals[itemIndex]
      );
    }

    const totalAmount = cartMeals.reduce((acc, meal) => acc + meal.amount, 0);

    props.handleUpdateCartAmount(totalAmount);

    console.log(totalAmount);

    setCartMeals(updatedCartMeals);
  };

  const resetCart = () => {
    setCartMeals([]);
    props.handleUpdateCartAmount(0);
  };

  return (
    <div id="list_container" className={slide}>
      <ul>
        {meals.map((meal) => {
          return (
            <FoodItem
              meal={meal}
              key={meal.name}
              handleAdding={props.handleAdding}
              addItemsToCart={addItemsToCart}
            />
          );
        })}
      </ul>

      {showcntxt.isClicked && (
        <CartModal
          cartMeals={cartMeals}
          updateCartAmount={updateCartAmount}
          resetCart={resetCart}
        />
      )}
    </div>
  );
};

export default FoodList;
