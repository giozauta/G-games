import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/default";
import HomeListViews from "@/pages/home/views/home-list-views"

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="home" element={<HomeListViews/>} />
      </Route>

      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
