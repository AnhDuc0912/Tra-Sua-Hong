import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        "& .MuiTypography-root": { textAlign: "center" },
      }}
    >
      <List component={Stack} direction="row">
        <ListItem disablePadding>
          <ListItemButton LinkComponent={Link} to="/">
            <ListItemText primary="Trang chủ" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton LinkComponent={Link} to="/shop">
            <ListItemText primary="Cửa hàng" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Đơn hàng" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Liên hệ" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default MainMenu;
