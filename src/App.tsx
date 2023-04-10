import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ModalNatureArea from "./modals/ModalNatureArea/ModalNatureArea";
import { useEffect, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  let location = useLocation();

  let state = location.state as { backgroundLocation?: Location };

  useEffect(() => {
    AOS.init({
      offset: 20,
      easing: "ease-in-out",
      duration: 500,
    });
  }, []);

  return (
    <div className="App">
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/modal/:id" element={<ModalNatureArea />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
