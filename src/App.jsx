import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import Sidebar from "./Components/Sidebar/Sidebar";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App flex flex-col h-full">
      <Router>
        <div className="flex flex-row h-full">
          <div className="w-64 flex-shrink-0 border-r border-gray">
            {/* Sidebar */}
            <Sidebar />
          </div>
          <div className="flex-grow overflow-auto p-10">
            {/* Content area */}
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
