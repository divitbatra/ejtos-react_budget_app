import React, { useContext } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AppContext } from "../context/AppContext";
import { FcPlus } from "react-icons/fc";
const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };
  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <FcPlus
          size="2.2em"
          onClick={(event) => increaseAllocation(props.name)}
        ></FcPlus>
      </td>
      <td>
        <AiOutlineMinusCircle
          size="2.2em"
          style={{ color: "red" }}
          onClick={(event) => decreaseAllocation(props.name)}
        ></AiOutlineMinusCircle>
      </td>
      <td>
        <FaTimesCircle
          size="2.2em"
          color="red"
          onClick={handleDeleteExpense}
        ></FaTimesCircle>
      </td>
    </tr>
  );
};
export default ExpenseItem;
