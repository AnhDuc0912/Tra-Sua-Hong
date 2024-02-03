import Header from "~/components/Layout/components/Header";
import styles from "./NoSideBar.module.scss";
import classNames from "classnames/bind";
import { Container, Grid } from "@mui/material";

const cx = classNames.bind(styles);

function NoSideBar({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={12}>
            <div>{children}</div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default NoSideBar;
