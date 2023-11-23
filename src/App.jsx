import { useState } from "react";
import "./App.css";
import BgImage from "./components/BgImage/BgImage";
import FoodList from "./components/FoodList/FoodList";
import Intro from "./components/Intro/Intro";
import Nav from "./components/Nav/Nav";
import Wrapper from "./components/Wrapper/Wrapper";
import ShowCartContext from "./components/Contexts/show-cart-context";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [isAdded, setIsAdded] = useState(0);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleAdding = (amount) => {
    setIsAdded(isAdded + amount);
  };

  const handleUpdateCartAmount = (amount) => {
    setIsAdded(amount);
  };

  return (
    <>
      <Nav handleShowCart={handleShowCart} isAdded={isAdded} />
      <BgImage />
      <Wrapper>
        <Intro />
        <ShowCartContext.Provider
          value={{ isClicked: showCart, onCloseCart: handleCloseCart }}
        >
          <FoodList
            handleAdding={handleAdding}
            handleUpdateCartAmount={handleUpdateCartAmount}
          />
        </ShowCartContext.Provider>
      </Wrapper>
    </>
  );
}

export default App;
