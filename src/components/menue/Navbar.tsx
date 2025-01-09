import { Button } from "@mui/material";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <Button component={Link} to="/home" color="inherit">
        Home
      </Button>
      <Button component={Link} to="/about" color="inherit">
        About
      </Button>
    </>
  );
};

export default Navbar;
