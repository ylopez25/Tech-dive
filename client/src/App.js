
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exams from "./pages/Exams";
import Navbar from "./components/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
import PageNotFound from "./pages/404PageNotFound";
import Admin from './pages/Admin'
import ExamDetails from "./pages/ExamDetails";
import { ExamProvider } from "./context/ExamContext";


function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <ExamProvider>
          <BrowserRouter>
            <Navbar />
            <div className="pages">
              <Routes>
                <Route path="/exams" element={<Exams />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/examdetails" element={<ExamDetails />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </ExamProvider>
      </div>
    </ChakraProvider>
  );
}

export default App;
