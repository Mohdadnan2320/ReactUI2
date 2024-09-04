import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecondPage from "./components/SecondPage";
import Features from "./components/Features";
import Visite from "./components/Visite";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden ">
      <div className=" bg-cover  bg-no-repeat w-full h-screen bg-[url('https://images.unsplash.com/photo-1670594457103-129309beb706?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] md:h-[100vh] lg:h-max ">
        <Navbar />
        <Hero />
      </div>
      <SecondPage />
      <Features />
      <Visite />
      <Footer />
    </div>
  );
};

export default App;
