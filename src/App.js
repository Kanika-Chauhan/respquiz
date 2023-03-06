import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainQuiz from "./Components/MainQuiz"
import Quiz from "./Components/Quiz"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainQuiz />}>
          </Route>
            <Route path='Quiz' element={<Quiz />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}



