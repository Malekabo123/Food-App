import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Nav.css";

const Nav = (props) => {
  const [addedClass, setAddedClass] = useState("");

  useEffect(() => {
    addedClass === "" ? setAddedClass("beat") : setAddedClass("");

    setTimeout(() => {
      setAddedClass("");
    }, 100);
  }, [props.isAdded]);

  const handleClick = (event) => {
    event.preventDefault();

    props.handleShowCart();
  };

  return (
    <nav>
      <h1 id="brand_name">Malek Abo Meals</h1>
      <div id="cart_nav" className={addedClass}>
        <a onClick={handleClick}>
          <FaShoppingCart />
          <span>Your Cart</span>
          <span>{props.isAdded}</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
