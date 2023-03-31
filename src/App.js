import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Transactions from "./components/Transaction/Transactions";

function App() {
  console.log(localStorage.getItem("transaction"), "localStorage.getItem(");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
