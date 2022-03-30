import React, { useState } from "react";
import CustomModal from "./components/CustomModal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Click here</Button>
      <CustomModal
        dataTestId="modal-test-id"
        open={open}
        handleClose={handleClose}
      >
        <Typography variant="h6" component="h2">
          Text Modal Component
        </Typography>
      </CustomModal>
    </div>
  );
}
