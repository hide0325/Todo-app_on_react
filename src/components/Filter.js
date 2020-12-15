import React from "react";
import { Select, MenuItem } from '@material-ui/core';

const Filter = ({ filter, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Select
      value={filter}
      onChange={handleChange}
    >
      <MenuItem value="all">ALL</MenuItem>
      <MenuItem value="uncompleted">UNCOMPLETE</MenuItem>
      <MenuItem value="completed">COMPLETE</MenuItem>
    </Select>
  );
};

export default Filter;
