import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Detail from "./components/Detail"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="posts/:id" element={<Detail />} />
        <Route path="*" element={<h1>Route does not exist</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
