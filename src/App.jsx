import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "~/routes";
import DefaultLayout from "~/components/Layout";
import { Fragment } from "react";
import { createTheme } from "@mui/material";

function App() {
  

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Element = route.component;
            const Layout = route.layout === null ? Fragment : DefaultLayout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Element />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
