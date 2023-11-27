import "./App.css";

import { HashRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import NoPage from "./pages/NoPage";
import Designs from "./pages/Designs";
import { useEffect } from "react";

const TRACKING_ID = "G-6Z7KF65YQY"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="photos" element={<Photos />} />
          <Route path="designs" element={<Designs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
