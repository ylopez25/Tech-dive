
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exams from "./pages/Exams";
import Navbar from "./components/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
import PageNotFound from "./pages/404PageNotFound";
import AdminList from "./pages/Admin";
import ExamInfo from "./components/ExamInfo";
import PatientDetails from "./pages/PatientDetails";

function App() {


  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/exams" element={<Exams />} />
              <Route path="/admin" element={<AdminList />} />
              <Route path="/api/exams/:id" element={<ExamInfo />} />
              <Route path="/api/patient/:id/exams" element={<PatientDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
