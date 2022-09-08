import Page from "@components/layout/Page";
import ExampleForm from "@pages/ExampleForm";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import App from "App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<App />} path="/">
          <Route element={<Page content={<Home />} />} index />
          <Route
            element={
              <Page
                content={<ExampleForm heading={"Example Form"} />}
                title="Example Form"
              />
            }
            path="form"
          />
          <Route
            element={<Page content={<h2>Dropdown 1</h2>} title="Dropdown 1" />}
            path="dropdown/1"
          />
          <Route
            element={<Page content={<h2>Dropdown 2</h2>} title="Dropdown 2" />}
            path="dropdown/2"
          />
          <Route
            element={<Page content={<NotFound />} title="Not Found" />}
            path="*"
          />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
