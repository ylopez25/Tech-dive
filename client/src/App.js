
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exams from "./pages/Exams";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
import PageNotFound from "./pages/404PageNotFound";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Exams />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </BrowserRouter>

      </div>
    </ChakraProvider>
  );
}

export default App;
