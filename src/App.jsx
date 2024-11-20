import Tracks from "./pages/Tracks";
import Hero from "./components/Hero";
import "./App.css";
import Cards from "./components/Cards/index";

function App() {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden gap-48 relative">
      <Hero />
      <Cards />
      <Tracks />
    </div>
  );
}

export default App;
