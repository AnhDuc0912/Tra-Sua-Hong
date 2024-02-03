import PersonIcon from "@mui/icons-material/Person";
import { Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Account(auth) {
  const [draw, setDraw] = useState(false);
  const toggleDrawer = () => {
    setDraw(!draw);
  };
  return (
    <>
      {auth === true ? (
        <IconButton LinkComponent={Link} to="/profile">
          <PersonIcon sx={{ color: "#fff" }} />
        </IconButton>
      ) : (
        <>
          <IconButton onClick={toggleDrawer}>
            <PersonIcon sx={{ color: "#fff" }} />
          </IconButton>

          <Drawer anchor="right" open={draw}>
            <h1>lỏ</h1>
          </Drawer>
        </>
      )}
    </>
  );
}

export default Account;
