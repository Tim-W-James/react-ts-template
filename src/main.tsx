import ExampleForm from "@pages/ExampleForm";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import "@scss/index.scss";
import App from "App";
import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route
            path="form"
            element={<ExampleForm heading={"Example Form"} />}
          />
          <Route path="dropdown/1" element={<p>Dropdown 1</p>} />
          <Route path="dropdown/2" element={<p>Dropdown 2</p>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
