import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/HomePage/Landing";
import LegalTerms from "./components/Legal/GDPR";
import LegalPrivacy from "./components/Legal/Privacy";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Impressum from "./components/Legal/impressum";
import ConfirmEmail from "./components/Confirm/ConfirmEmail";
import ResetPassword from "./components/Confirm/ResetPassword";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-main">
        <div className="main-content">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/account/confirmemail"
              component={ConfirmEmail}
            />
            <Route
              exact
              path="/account/resetpassword"
              component={ResetPassword}
            />
            <Route exact path="/legal/privacy" component={LegalPrivacy} />
            <Route exact path="/legal/impressum" component={Impressum} />
            <Route exact path="/legal/terms" component={LegalTerms} />
            <Route exact path="/about-us" component={About} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
