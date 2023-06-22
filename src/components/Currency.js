import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div
      className="alert alert-secondary"
      style={{ background: "rgba(50,205,50,50%)", color: "black" }}
    >
      {" "}
      Currency{" "}
      {
        <select
          name="Currency"
          id="Currency"
          style={{ background: "rgba(50,205,50,1%)", border: "none" }}
          onChange={(event) => changeCurrency(event.target.value)}
        >
          
          <option value="£" style={{ background: "rgba(50,205,50,50%)" }}>
            Pound(£)
          </option>
          <option value="$" style={{ background: "rgba(50,205,50,50%)" }}>
            Dollar($)
          </option>
          <option value="₹" style={{ background: "rgba(50,205,50,50%)" }}>
            Rupee(₹)
          </option>
          <option value="€" style={{ background: "rgba(50,205,50,50%)" }}>
            Euro(€)
          </option>
        </select>
      }
    </div>
  );
};
export default Currency;
