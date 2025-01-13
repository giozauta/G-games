import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/default";
import HomeListViews from "@/pages/home/views/home-list-views";
import Profile from "./pages/profile";
import AddGame from "./pages/add-game";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import NotFound from "./pages/404";
import GamePage from "./pages/game-page";
import LangGuard from "./components/lang-guard";
import AuthGuard from "./components/auth-guard";
import { useAtom } from "jotai";
import { userAtom } from "./store/jotai";
import { useEffect } from "react";
import supabase from "./supabase";

function App() {
  const [, setUser] = useAtom(userAtom);

  useEffect(() => {
    const loadSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUser(session);
        localStorage.setItem("userSession", JSON.stringify(session));
      }
    };

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
      if (session) {
        localStorage.setItem("userSession", JSON.stringify(session));
      } else {
        localStorage.removeItem("userSession");
      }
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <Routes>
      <Route path=":lang" element={<LangGuard />}>
        <Route element={<DefaultLayout />}>
          <Route path="home" element={<HomeListViews />} />

          <Route
            path="profile"
            element={
              <AuthGuard>
                <Profile />
              </AuthGuard>
            }
          />

          <Route
            path="addGame"
            element={
              <AuthGuard>
                <AddGame />
              </AuthGuard>
            }
          />

          <Route path="sign-in" element={<SignIn />} />

          <Route path="sign-up" element={<SignUp />} />

          <Route path="gamePage/:id" element={<GamePage />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
