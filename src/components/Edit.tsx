import { Box, Button, FormControl, Modal, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../reducer/userReducer";
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

  const { user, userDispatch } = useContext(UserContext);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Address"
                variant="outlined"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Phone"
                variant="outlined"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
                margin="normal"
              />

              <Button
                onClick={() => {
                  handleClose();
                  userDispatch({
                    type: "UPDATE_USER",
                    data: {
                      id: user.id,
                      name: name,
                      email: email,
                      password: password,
                      address: address,
                      phone: phone,
                    },
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
