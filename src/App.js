import React from "react";
import { Route } from "react-router-dom";
import "./css/App.css";
import Navbar from "./components/globals/Navbar";
import Footer from "./components/globals/Footer";
import MainPage from "./pages/main/MainPage";
import RefillRx from "./pages/RefillRx";
import TransferRx from "./pages/TransferRx";
import Compounding from "./pages/compounding/Compounding";
import AboutUs from "./pages/AboutUs";
import Event from "./pages/Event";
import CBD from "./pages/CBD";
import Hospice from "./pages/Hospice";
import ThreeDollar from "./pages/ThreeDollar";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Route exact path="/" render={() => <MainPage />} />
        {/*<Route exact path="/about" ren render={() => <AboutUsPage />} /> */}
        <Route exact path="/refillrx" render={() => <RefillRx />} />
        <Route exact path="/transferrx" render={() => <TransferRx />} />
        <Route exact path="/compounding" render={() => <Compounding />} />
        <Route exact path="/aboutus" render={() => <AboutUs />} />
        <Route exact path="/event" render={() => <Event />} />
        <Route exact path="/hospice" render={() => <Hospice />} />
        <Route exact path="/cbd" render={() => <CBD />} />
        <Route exact path="/3dollar" render={() => <ThreeDollar />} />

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
