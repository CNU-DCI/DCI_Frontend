import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Popup, SubjectList } from "./pages";
import styled from "@emotion/styled";
import "./App.css";

const Background = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <Background className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/subjectList" element={<SubjectList />} />
          <Route path="/subject/:subjectId" element={<Popup />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
