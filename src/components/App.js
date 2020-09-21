import React, { useState } from "react";
import Header from "./ui/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Footer from "./ui/Footer";
import LandingPage from "./ui/LandingPage";
import theme from "./ui/Theme";
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        {/* Switch component renders the first component which matches to route */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/services"
            component={() => {
              return <div style={{ height: "2000px" }}>Services</div>;
            }}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => {
              return <div>Mobile Apps</div>;
            }}
          />
          <Route
            exact
            path="/customsoftware"
            component={() => {
              return <div>Custom Software</div>;
            }}
          />
          <Route
            exact
            path="/websites"
            component={() => {
              return <div>Websites</div>;
            }}
          />
          <Route
            exact
            path="/revolution"
            component={() => {
              return <div>Revolution</div>;
            }}
          />
          <Route
            exact
            path="/about"
            component={() => {
              return <div>About Us</div>;
            }}
          />
          <Route
            exact
            path="/contact"
            component={() => {
              return <div>Contact </div>;
            }}
          />
          <Route
            exact
            path="/estimate"
            component={() => {
              return <div>Estimate</div>;
            }}
          />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={selectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
