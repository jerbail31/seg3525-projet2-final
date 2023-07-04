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


function App() {
  return (
    <Router>
    <ScrollToTop></ScrollToTop>
    <div className="App">
      <Header />
      <Navbar />
      <br/>
      <Routes>
        <Route exact path="/seg3525-projet2" element={<Home />}/>
        <Route path="/seg3525-projet2/Services" element={<Services />}/>
        <Route path="/seg3525-projet2/Booking" element={<Booking />}/> 
        <Route path="/seg3525-projet2/AccountLogin" element={<AccountLogin />}/>
        <Route path="/seg3525-projet2/Account" element={<Account />}/>
      </Routes>
      <Footer />
    </div>
  </Router> 
  );
}

export default App;
