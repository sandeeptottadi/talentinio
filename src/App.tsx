import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Brands from "./components/brands/Brands";
import Candidates from "./components/top-candidates/Candidates";
import WhyUs from "./components/why-us/WhyUs";
import Blogs from "./components/blogs/Blogs";
import WorkingProcess from "./components/working-process/WorkingProcess";
import Clients from "./components/OurClients/Clients";
import Counter from "./components/counter/Counter";
import styles from "./components/header/styles.module.css";

function App() {
  React.useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.getElementById("header");
      if (headerElement) {
        if (window.scrollY > 100) {
          headerElement.classList.add(`${styles["transparent-header"]}`);
        } else {
          headerElement.classList.remove(`${styles["transparent-header"]}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <Home />
      <Brands />
      <Candidates />
      <WhyUs />
      <Blogs />
      <WorkingProcess />
      <Clients />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
