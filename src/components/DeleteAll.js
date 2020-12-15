import React from "react";
import { Button } from '@material-ui/core'

const DeleteAll = ({ onClick }) => {
  const handleDelete = () => onClick();

  return <Button
          variant="contained"
          color="secondary"
          onClick={handleDelete}
        >delete all</Button>;
};

export default DeleteAll;
