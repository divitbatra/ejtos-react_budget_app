import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { setBudget, expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    function changeBudget(e) {
      if (e < 20000 && e > totalExpenses) {
        console.log("condition met");
        setBudget(e);
      } else if (e >= 20000) {
        alert("Please enter a budget of less than 20000");
      } else if (e < totalExpenses) {
        alert("New budget cannot be less than expenses");
      }
    }
    const timer = setTimeout(() => {
      changeBudget(inputValue);
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputValue, setBudget, totalExpenses]);

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        onChange={(e) => {
          e.preventDefault();
          setInputValue(e.target.value);
        }}
        value={inputValue}
        step="10"
        min="0"
        max="20000"
      ></input>
    </div>
  );
};
export default Budget;
