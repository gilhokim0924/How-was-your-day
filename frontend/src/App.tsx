import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Today from "./pages/Today";
import Calendar from "./pages/Calendar";
import Moods from "./pages/Moods";
import Settings from "./pages/Settings";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/today" element={<Today />} />
        <Route path="/dashboard/calendar" element={<Calendar />} />
        <Route path="/dashboard/moods" element={<Moods />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
