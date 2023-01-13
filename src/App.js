import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

function App() {
  const none = 'Home'
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/burger" element={<Home key={"burger"}  category="burger" />} />
          <Route path="/pizza" element={<Home key={"pizza"}  category="pizza" />} />
          <Route path="/biryani" element={<Home key={"biryani"}  category="biryani" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
