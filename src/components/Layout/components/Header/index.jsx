import classNames from "classnames/bind";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MainMenu from "~/components/MainMenu";
import { Box, IconButton, Stack } from "@mui/material";
import Account from "~/components/Account";

const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img src={images.logo} alt="TikTok" />
          </Link>
        </div>

        <MainMenu />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Stack direction="row" spacing={2}>
                <Box
                  borderRadius="8px"
                  overflow="hidden"
                  bgcolor="primary.main"
                >
                  <IconButton>
                    <ShoppingCartIcon sx={{ color: "#fff" }} />
                  </IconButton>
                </Box>
                <Box
                  borderRadius="8px"
                  overflow="hidden"
                  bgcolor="primary.main"
                >
                  <Account auth={false}/>
                </Box>
              </Stack>
            </>
          ) : (
            <Box borderRadius="8px" overflow="hidden" bgcolor="primary.main">
              <IconButton>
                <PersonIcon fontSize="large" sx={{ color: "#fff" }} />
              </IconButton>
            </Box>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
