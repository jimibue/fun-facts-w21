import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Counter from "./components/Counter";
import Facts from "./components/Facts";
import Navbar from "./components/Navbar";

// react-router-dom v6
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Facts />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

// react-router-dom v5
// function App() {
//   return (
//     <>
//       <Route path="/" component={Facts} />
//       <Route path="/counter" component={Counter} />
//     </>
//   );
// }

export default App;
