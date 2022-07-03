import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "./components/AppBar";
import Board from "./components/BoardCard";
import CssBaseline from "@mui/material/CssBaseline";
import BoardsPage from "./components/BoardsPage";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <AppBar />
          <BoardsPage />
          <Routes>
            <Route path="/:boardId" element={<p> anan</p>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
