import { Box, Button, FormControl, Modal, TextField } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../reducer/userReducer";
const Login = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { userDispatch } = useContext(UserContext);

  return (
    <>
      <Button color="inherit" onClick={handleOpen}>
        Login
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl defaultValue="" required>
            <TextField
              label="Name"
              variant="outlined"
              type="email"
              ref={nameRef}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Password"
              variant="outlined"
              type="password"
              ref={passwordRef}
              fullWidth
              margin="normal"
            />

            <Button
              onClick={() => {
                handleClose();
                userDispatch({
                  type: "ADD_USER",
                  data: {
                    name: nameRef.current?.value || "",
                    password: passwordRef.current?.value || "",
                    isLogin: true,
                  },
                });
              }}
              variant="contained"
            >
              login
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
};

export default Login;
