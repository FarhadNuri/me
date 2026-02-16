import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <p className="text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Farhad Nuri. All rights reserved.
      </p>
    </div>
  );
}

export default App;
