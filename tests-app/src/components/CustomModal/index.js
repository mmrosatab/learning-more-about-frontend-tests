import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function CustomModal(props) {
  const { open, handleClose, children } = props;
  return (
    <Modal data-testid="modal-test-id" open={open} onClose={handleClose}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
