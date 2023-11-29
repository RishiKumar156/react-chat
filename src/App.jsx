import Home from "./Components/Home/Home";
import Navigation from "./Components/Nav/Navigation";

export default function App() {
  return (
    <div className="flex items-center">
      <Home className="overflow-auto h-screen" /> <Navigation />
    </div>
  );
}
