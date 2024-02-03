import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import { Grid, Hidden } from "@mui/material";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Grid container spacing={2}>
          <Hidden smDown>
            <Grid item lg={3}>
              <Sidebar />
            </Grid>
          </Hidden>
          <Grid item lg={9} sm={12} md={9}>
            <div>{children}</div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DefaultLayout;
