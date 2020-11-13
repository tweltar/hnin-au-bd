import React from "react";

const MenuContext = React.createContext({
  selectedIndex: 0,
  setSelectedIndex: () => {},
  handleListItemClick: () => {},
});

export default MenuContext;
