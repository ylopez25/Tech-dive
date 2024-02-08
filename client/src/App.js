
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
            <Route path="/" element={<Home />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </ChakraProvider>
  );
}

export default App;
