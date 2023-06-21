import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import InterestSelection from "./pages/InterestSelection";
import ProfilePage from "./pages/ProfilePage";
import LobbyPage from "./pages/LobbyPage";
import LobbyCreation from "./pages/LobbyCreation";
import LobbyDetailsPage from "./pages/LobbyDetailsPage";
import lozad from "lozad";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import getCookie from "./lib/getCookie";
import UserContext from "./context/UserContext";
import NotFound from "./pages/NotFound";
import JoinedLobbies from "./pages/JoinedLobbies";
import CreatedLobbies from "./pages/CreatedLobbies";
import Notifications from "./pages/Notifications";


function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const observer = lozad(".lozad");
    observer.observe();
  }, []);

  useEffect(() => {
    const token = getCookie("token");
    if (user === "" && token) {
      const data = jwt_decode(token);
      if (data.exp > new Date().getTime() / 1000) {
        setUser(jwt_decode(token));
      } else {
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }
    }
  }, [user]);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/interest-selection" element={<InterestSelection />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/lobby-page" element={<LobbyPage />} />
          <Route path="/create-lobby" element={<LobbyCreation />} />
          <Route path="/lobby-details" element={<LobbyDetailsPage />} />
          <Route path="/joined-lobbies" element={<JoinedLobbies />} />
          <Route path="/created-lobbies" element={<CreatedLobbies />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
