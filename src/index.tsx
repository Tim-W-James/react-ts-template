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
        <Route path="/" element={<App />}>
          <Route index element={<Page content={<Home />} />} />
          <Route
            path="form"
            element={
              <Page
                content={<ExampleForm heading={"Example Form"} />}
                title="Example Form"
              />
            }
          />
          <Route
            path="dropdown/1"
            element={<Page content={<h2>Dropdown 1</h2>} title="Dropdown 1" />}
          />
          <Route
            path="dropdown/2"
            element={<Page content={<h2>Dropdown 2</h2>} title="Dropdown 2" />}
          />
          <Route
            path="*"
            element={<Page content={<NotFound />} title="Not Found" />}
          />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
