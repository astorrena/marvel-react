import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/inicio" exact component={() => <Home />} />
        <Route path="/series" exact component={() => <Series />} />
        <Route path="/comics" exact component={() => <Comics />} />
        <Route path="/*" exact component={() => <Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
