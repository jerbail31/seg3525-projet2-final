import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import './App.css';
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Services from "./components/Services.js";
import Booking from "./components/Booking.js";
import Account from "./components/Account.js";
import AccountLogin from "./components/AccountLogin.js";
import Footer from "./components/Footer.js";
import NotFound from "./components/NotFound.js";
import SignUp from "./components/SignUp.js";


function App() {
  return (
    <Router>
    <ScrollToTop></ScrollToTop>
    <div className="App">
      <Header />
      <Navbar />
      <br/>
      <Routes>
        <Route exact path="" element={<Home />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Booking" element={<Booking />}/> 
        <Route path="/AccountLogin" element={<AccountLogin />}/>
        <Route path="/Account" element={<Account />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  </Router> 
  );
}

export default App;
