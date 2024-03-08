import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import WorkDetail from "./ModuleMain/WorkDetail"; // 确保路径正确

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work/:workId" element={<WorkDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
