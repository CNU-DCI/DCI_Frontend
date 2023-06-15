import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Popup, SubjectList } from "./pages";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { getMajors } from "services/api";

const Background = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

function App() {
<<<<<<< HEAD
  const [major, setMajor] = useState([]);

  useEffect(() => {
    setMajor(getMajors());
  }, []);
=======
    const [message, setMessage] = useState([]);
    useEffect(() => {
        fetch("/hi")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setMessage(data);
            });
    }, []);
>>>>>>> d3789f54843445e33b0236bb2bc55921d96135b5

  return (
    <Background className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/subjectList" element={<SubjectList major={major} />} />
          <Route path="/subject/:subjectId" element={<Popup />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
