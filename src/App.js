import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./scss/App.scss";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage.component";
import HomePage from "./components/HomePage/HomePage.component";
import Footer from "./components/FooterPage";

function App() {
  return (
    <div className="App">
    
      <Router>
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </section>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
