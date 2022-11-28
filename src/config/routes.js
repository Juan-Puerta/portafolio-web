import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";

const routing = (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
    </Routes>
  </BrowserRouter>
);

export default routing;
