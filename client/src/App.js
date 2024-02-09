
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Exams from "./pages/Exams";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import ExamDetails from './pages/ExamDetails';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            {/* <Route path="/" element={<Home />} />  */}
            {/* Commenting out homepage for now -Ben */}
            <Route path="/exams" element={<Exams />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/examdetails" element={<ExamDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </ChakraProvider>
  );
}

export default App;
