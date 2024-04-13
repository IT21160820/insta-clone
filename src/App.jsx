
import "./App.css";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
    {/* <Router>
      <Routes>
        <Route path='/' element={<Homepage />} errorElement={<NotFoundPage />} />
      </Routes>
    </Router> */}
    <Homepage />
    <Sidebar />
      
    </div>
  );
}

export default App;