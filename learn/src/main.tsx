import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from 'react-router';
import { createRoot } from "react-dom/client";
import Root from './Root';
import UseActionState from './views/hooks/UseActionState';

import "./style.css";
import Timer from "./views/hooks/Timer";
import TestUseImperativeHandle from "./views/hooks/TestUseImperativeHandle";
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/test-use-imperative-handle" element={<TestUseImperativeHandle />} />
        <Route path="/use-action-state" element={<UseActionState />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

