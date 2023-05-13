import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookDescription from "./components/BookDescription/BookDescription";
import HeaderContainer from "./components/Header/HeaderContainer";
import MainPageContainer from "./components/MainPage/MainPageContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<MainPageContainer />} />
          <Route
            path={"/:id"}
            element={<BookDescription className={"main"} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
