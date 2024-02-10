import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import Entreprises from "./pages/Entreprises";
import Particuliers from "./pages/Particuliers";
import Presentation from "./pages/Presentation";
import Cgu from "./pages/Cgu";
import Harassment from "./pages/Harassment";
import Tms from "./pages/Tms";
import BurnOut from "./pages/BurnOut";
import Organization from "./pages/Organization";
import Stress from "./pages/Stress";
import Rps from "./pages/Rps";
import Skills from "./pages/Skills";
import LegalMentions from "./pages/LegalMentions";
import Confidential from "./pages/Confidential";
import Connexion from "./pages/Connexion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/entreprises" element={<Entreprises />} />
      <Route path="/particuliers" element={<Particuliers />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/qui-je-suis" element={<Presentation />} />
      <Route path="/vos-questions" element={<Questions />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/connexion" element={<Connexion />} />

      <Route path="/tms" element={<Tms />} />
      <Route path="/burn-out" element={<BurnOut />} />
      <Route
        path="/changement-organisation-de-travail"
        element={<Organization />}
      />
      <Route path="/stress" element={<Stress />} />
      <Route path="/rps" element={<Rps />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/harassment" element={<Harassment />} />

      <Route path="/mentions-legales" element={<LegalMentions />} />
      <Route path="/politique-de-confidentialite" element={<Confidential />} />
      <Route path="/CGU" element={<Cgu />} />
    </Routes>
  );
}

export default App;
