import Tracks from "./pages/Tracks";
import Hero from "./components/Hero";
import "./App.css";
import Cards from "./components/Cards/index";

function App() {
  return (
    <>
    <div className="relative">
      <Hero />
      <Cards />
      <Tracks />
    </div>
    </>
  );
}

export default App;
