import React from "react";
import About from "./components/about/About";
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero";
import TechStack from "./components/techstack/TechStack";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";

const App = () => {
    return(
        <div>
            <Header />
            <Hero />
            <About />
            <TechStack />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App

