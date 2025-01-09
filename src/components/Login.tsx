import { Box, Button, FormControl, Modal, TextField } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../reducer/userReducer";
const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
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

  const { auth, userDispatch } = useContext(AuthContext);

  if (auth.isLogin) {
    return <></>;
  }

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
          <FormControl defaultValue="">
            <TextField
              label="Email"
              variant="outlined"
              inputRef={emailRef}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Password"
              variant="outlined"
              inputRef={passwordRef}
              fullWidth
              margin="normal"
            />

            <Button
              onClick={() => {
                handleClose();
                userDispatch({
                  type: "ADD_USER",
                  user: {
                    email: emailRef.current?.value || "",
                    password: passwordRef.current?.value || "",
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
