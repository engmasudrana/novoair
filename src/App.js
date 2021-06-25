import {createContext, useState} from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import TopBanner from "./components/TopBanner/TopBanner";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Login from "./auth/Login/Login";
import PrivateRoute from "./auth/PrivateRoute/PrivateRoute";
import PaymentPage from "./components/PaymentPage/PaymentPage";
import TicketList from "./components/TicketList/TicketList";


export const userContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <Router>
            <Header/>
            <Switch>
                <Route path="/Home">
                    <Home />
                </Route>

                <Route path="/login">
                    <Login />
                    <Footer/>
                </Route>

                <PrivateRoute path="/book">
                   <PaymentPage/>
                    <Footer/>
                </PrivateRoute>

                <Route path="/ticket/:id">
                    <TicketList/>
                    <Footer/>
                </Route>

                <Route exact path="/">
                    <TopBanner />
                    <Home />
                    <Footer />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/coming">
                   <ComingSoon/>
                    <Footer/>
                </Route>

            </Switch>
        </Router>

      </userContext.Provider>
  );
}

export default App;
