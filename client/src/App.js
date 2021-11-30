import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Counter from "./components/Counter";
import FactForm from "./components/FactForm";
import Facts from "./components/Facts";
import FactShow from "./components/FactShow";
import Navbar from "./components/Navbar";

// react-router-dom v6
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Facts />} />
        <Route path="/facts/:id" element={<FactShow />} />
        <Route path="/facts/:id/edit" element={<FactForm />} />
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
