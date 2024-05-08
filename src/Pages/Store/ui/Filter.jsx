
import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";



function Filter() {
   const [month, setMont] = useState("january");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = function (e) {
    searchParams.set("month", e.target.value);
    setSearchParams(searchParams);
    setMont(e.target.value)
  };
  return (
    <div className="border-2 border-stone-800 rounded-md flex items-center bg-white px-2 sm:px-4">
      <span className="text-stone-600">Month:</span>
      <select
        value={month}
        className=" py-1 px-1 md:px-3 border-none outline-none  text-stone-900"
        onChange={handleClick}
      >
        <option value="All" className="capitalize font-semibold">
          {" "}
          All
        </option>
        <option value="january" className="capitalize font-semibold">
          {" "}
          January
        </option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
      </select>
    </div>
  );
}

export default Filter;
