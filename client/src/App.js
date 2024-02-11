

import ExamDetails from './pages/ExamDetails';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const { response } = useApi();

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </ChakraProvider>
  );
}

export default App;
