import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useApi } from './hooks/use-api';
import ExamsPage from './pages/exams';
import LandingPage from './pages/LandingPage';
import PatientExample from './pages/patientExample'
import NavTut from './components/navbar';
import AdminPage from './pages/admin';


// Need to Perform Styling
function App() {
  // const { response } = useApi();

  return (
    <div className="App">
      <BrowserRouter>
        <NavTut />
        <header className="App-header">
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
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
