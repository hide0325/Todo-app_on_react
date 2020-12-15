import React from "react";
import { Checkbox } from '@material-ui/core';

const CheckAll = ({ allCompleted, onChange }) => {
  const handleChange = () => {
    onChange(!allCompleted);
  };

  return (
    <label className="checkbox">
      <Checkbox
        checked={allCompleted}
        onChange={handleChange}
      />
      ALL {allCompleted ? "UNCOMPLETE" : "COMPLETE"}
    </label>
  );
};

export default CheckAll;
