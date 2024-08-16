import React from "react";

import Charts from "./components/Body";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="relative">
      <SideBar />
      <Header />
      <Charts />
    </div>
  );
};

export default App;
