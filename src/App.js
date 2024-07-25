import "./App.css";
import Login from "./components/Login";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/globalComponents/Navigation";
import DashBoard from "./components/DashBoard";
import JobRequest from "./components/JobRequest";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation></Navigation>
        <Routes>
          <Route exact path="/" element={<DashBoard></DashBoard>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/jobRequest" element={<JobRequest></JobRequest>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
