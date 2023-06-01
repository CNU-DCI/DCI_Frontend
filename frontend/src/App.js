import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, SubjectList } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/subjectList" element={<SubjectList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
