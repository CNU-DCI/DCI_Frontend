import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Popup, SubjectList } from "./pages";
import styled from "@emotion/styled";
import "./App.css";
import { useEffect, useState } from "react";
import { getMajors, readAllStatistics } from "services/api";

const Background = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

function App() {
  const [major, setMajor] = useState([]);
  const [results, setResults] = useState([]);
  const [cart, setCart] = useState([]);
  const [stat, setStat] = useState([]);

  useEffect(() => {
    getMajors().then((data) => setMajor(data));
  }, []);

  const addCart = (idx) => {
    const tmpResult = results.filter((result) => result.subjectID === idx)[0];
    setCart([...cart, tmpResult]);
  };

  const removeData = (key) => {
    const removedCart = cart.filter((c) => c.subjectID !== key);
    setCart(removedCart);
  };

  useEffect(() => {
    if (cart.length !== 0) {
      const idList = cart.map((r) => r.subjectID);
      readAllStatistics(idList).then((r) => setStat(r));
    }
  }, [cart]);

  return (
    <Background className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/subjectList"
            element={
              <SubjectList
                major={major}
                setCart={setCart}
                cart={cart}
                results={results}
                setResults={setResults}
                addCart={addCart}
                removeData={removeData}
                stat={stat}
              />
            }
          />
          <Route
            path="/subject/:subjectId"
            element={<Popup results={results} />}
          />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
