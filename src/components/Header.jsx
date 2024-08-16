import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../app/store";
import { openAddWidget } from "../app/features/addWidgetSlice";

const Header = () => {
  const { value } = useSelector((store) => store.widget);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(openAddWidget());
  };

  console.log("store", value);

  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex gap-3">
        <h2 className="text-gray-400 font-semibold">Home</h2>
        <h2 className="text-black font-bold">Dashboard</h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="🔍 Search anything"
          className="py-2 bg-gray-200 rounded-md px-4 "
        />
      </div>
      <button
        onClick={handleOpen}
        className="py-2 bg-gray-200 px-4 rounded-md text-black"
      >
        Add Widget +
      </button>
    </div>
  );
};

export default Header;
