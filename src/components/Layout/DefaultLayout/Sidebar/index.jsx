import * as React from "react";
import {
  Checkbox,
  Collapse,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slider,
} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MoneyIcon from "@mui/icons-material/Money";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const [value1, setValue1] = React.useState([20, 37]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - 10), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + 10)]);
    }
  };

  return (
    <aside>
      <List>
        <ListItemButton
          onClick={handleClick}
          style={{ color: "var(--text-color)" }}
          color="inherit"
        >
          <ListItemIcon>
            <FormatListBulletedIcon
              style={{ color: "var(--text-color)" }}
              fontSize="large"
            />
          </ListItemIcon>
          <ListItemText
            primary="Lọc Theo Danh Mục"
            primaryTypographyProps={{ fontSize: "16px" }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />
              </FormGroup>
            </ListItemButton>
          </List>
        </Collapse>
        <Divider variant="middle" component="li" />

        <ListItem>
          <ListItemIcon>
            <MoneyIcon
              style={{ color: "var(--text-color)" }}
              fontSize="large"
            />
          </ListItemIcon>
          <ListItemText
            primary="Lọc Theo Giá"
            primaryTypographyProps={{ fontSize: "16px" }}
          />
        </ListItem>
        <Container>
          <Slider
            max={200}
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            disableSwap
          />
        </Container>
      </List>
    </aside>
  );
}
