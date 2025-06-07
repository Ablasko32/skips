import Header from "./components/Header/Header";
import SkipDisplay from "./components/SkipDisplay/SkipDisplay";
import SkipDisplayProvider from "./contexts/skip-display/SkipDisplayProvider";
import "./App.css";

function App() {
  return (
    <div className="AppLayout">
      <Header />

      <SkipDisplayProvider>
        <SkipDisplay />
      </SkipDisplayProvider>
    </div>
  );
}

export default App;
