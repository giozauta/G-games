import "./App.css";
import { useAtom } from "jotai";
import { userAtom } from "./store/jotai";
import { useEffect } from "react";
import supabase from "./supabase";
import AppRoutes from "./Routes";

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

  return <AppRoutes />;
}

export default App;
