import LangGuard from "@/components/lang-guard";
import IsAuthLayout from "@/layouts/auth";
import DefaultLayout from "@/layouts/default";
import NotFound from "@/pages/404";
import AddGame from "@/pages/add-game";
import GamePage from "@/pages/game-page";
import HomeListViews from "@/pages/home/views/home-list-views";
import Profile from "@/pages/profile";
import SignIn from "@/pages/sign-in";
import SignUp from "@/pages/sign-up";

import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {




  return (
    <Routes>
      <Route path=":lang" element={<LangGuard />}>
        <Route element={<IsAuthLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="addGame" element={<AddGame />} />
        </Route>

        <Route element={<DefaultLayout />}>
          <Route path="home" element={<HomeListViews />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="gamePage/:id" element={<GamePage />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
