import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import { Grid } from "@mui/material";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <div className={cx("content")}>{children}</div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DefaultLayout;
