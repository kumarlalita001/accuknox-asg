import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAddWidget } from "../app/features/addWidgetSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.widget);

  //  console.log("store", value);

  const handleClose = () => {
    dispatch(closeAddWidget());
    console.log("hanldeClose");
  };

  return (
    <div
      className={`fixed ${
        value && "w-0"
      } right-0 w-[40%] h-screen bg-slate-200 transition-all duration-500 ease-in-out `}
    >
      <button
        onClick={handleClose}
        className="bg-purple-300  text-lg w-8 h-8 right-0 "
      >
        X
      </button>
    </div>
  );
};

export default SideBar;
