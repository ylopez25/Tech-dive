
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exams from "./pages/Exams";
import Navbar from "./components/Navbar";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import PageNotFound from "./pages/404PageNotFound";
import Admin from "./pages/Admin";
import ExamInfo from "./components/ExamInfo";
import PatientDetails from "./pages/PatientDetails";
import UpdateExam from "./pages/UpdateExam";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
              ...activeLabelStyles
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
  }
});

function App() {


  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/exams" element={<Exams />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/exams/:id" element={<ExamInfo />} />
              <Route path="/admin/:id/update" element={<UpdateExam/>}/>
              <Route path="/patient/:id/exams" element={<PatientDetails />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/" element={<Exams />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
