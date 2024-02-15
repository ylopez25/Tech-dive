import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useApi } from './hooks/use-api';
import ExamsList from './components/examsList'
import LandingPage from './pages/landingPage';
import PatientExample from './pages/patientExample'
import NavTut from './components/navbar_cc';
import AdminList from './components/adminList';
import { ChakraProvider } from '@chakra-ui/react';
import ExamDetails from './components/examDetail';
import UpdatePage from './components/adminUpdate';

function App() {
  // const { response } = useApi();

  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <NavTut />
          {/* <p>
          {response}
        </p> */}
          <div>
            <Routes>
              <Route
                path="/exams"
                element={<ExamsList />}
              />
              <Route
                path="/"
                element={<LandingPage />}
              />
              <Route
                path="/single_patient"
                element={<PatientExample />}
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
