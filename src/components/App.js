import React, { useState } from "react";
import Header from "./ui/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Footer from "./ui/Footer";
import LandingPage from "./ui/LandingPage";
import Services from "./Services";
import theme from "./ui/Theme";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./ui/MobileApps";
import Website from "./ui/Website";
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
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/mobileapps"
            render={(props) => (
              <MobileApps
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) => (
              <CustomSoftware
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/websites"
            render={(props) => (
              <Website
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
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
