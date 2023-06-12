import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import InterestSelection from "./pages/InterestSelection";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/interest-selection" element={<InterestSelection/>}/>
        <Route path='/profile-page' element={<ProfilePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
