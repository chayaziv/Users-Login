import { Box, Button, FormControl, Modal, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../reducer/userReducer";

const Edit = () => {
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

  const { auth, userDispatch } = useContext(AuthContext);
  const [user, setUser] = useState(auth.user);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setUser(auth.user);
  }, [auth.user]);

  if (!auth.isLogin) {
    return <></>;
  }

  return (
    <>
      <div>
        <Button color="inherit" onClick={handleOpen}>
          Edit Details
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
                label="First Name"
                variant="outlined"
                value={user.firstName}
                onChange={(e) => setUser({...user, firstName:e.target.value})}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Last Name"
                variant="outlined"
                value={user.lastName}
                onChange={(e) => setUser({...user, lastName:e.target.value})}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                value={user.email}
                onChange={(e) => setUser({...user, email:e.target.value})}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password:e.target.value})}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Address"
                variant="outlined"
                type="text"
                value={user.address}
                onChange={(e) => setUser({...user, address:e.target.value})}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Phone"
                variant="outlined"
                type="tel"
                value={user.phone}
                onChange={(e) => setUser({...user, phone:e.target.value})}
                fullWidth
                margin="normal"
              />

              <Button
                onClick={() => {
                  handleClose();
                  userDispatch({
                    type: "UPDATE_USER",
                    user: user,
                  });
                }}
                variant="contained"
              >
                save
              </Button>
            </FormControl>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Edit;
