import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/default";
import HomeListViews from "@/pages/home/views/home-list-views";
import Profile from "./pages/profile";
import AddGame from "./pages/add-game";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import NotFound from "./pages/404";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="home" element={<HomeListViews />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addGame" element={<AddGame />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>

      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
