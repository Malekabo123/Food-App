import React from "react";

const ShowCartContext = React.createContext({
  isClicked: false,
  onCloseCart: () => {},
});

export default ShowCartContext;
