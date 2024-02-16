
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import PageNotFound from "./pages/404PageNotFound";
import './App.css';
import ExamsList from './components/examsList'
import LandingPage from './pages/LandingPage';
import PatientExample from './pages/patientExample'
import Navbar from "./components/Navbar";
import AdminList from './components/adminList';
import ExamDetails from './components/examDetail';
import UpdatePage from './components/adminUpdate';

function App() {
  // const { response } = useApi();

  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route
                path="/exams"
                element={<ExamsList />}
              />
              <Route
                path="/"
                element={<LandingPage />}
              />
              <Route
                path="/admin_list"
                element={<AdminList />}
              />
              <Route
                path="/examdetails"
                element={<ExamDetails />}
              />
              <Route
                path="/update_exam"
                element={<UpdatePage />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
