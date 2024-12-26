import { Box, Button, FormControl, Modal } from "@mui/material";
import { useContext,  useState } from "react";
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
                <label htmlFor="name">Name</label>
                <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="address">Address</label>
                <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />

                <label htmlFor="phone">Phone</label>
                <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
