import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useApi } from './hooks/use-api';
import ExamsPage from './pages/exams';
import LandingPage from './pages/LandingPage';
import PatientExample from './pages/patientExample'
import NavTut from './components/navbar_cc';
import AdminPage from './pages/admin';
import { ChakraProvider } from '@chakra-ui/react';


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
                element={<ExamsPage />}
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
                path="/admin"
                element={<AdminPage />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
