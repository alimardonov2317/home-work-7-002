import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { lazy } from "react";
import Header from "./components/Header";
import store from "./redux/index";

const Home = lazy(() => import("./pages/home/Home"));
const CreateUser = lazy(() => import("./pages/createuser/Createuser"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateUser />} />
          </Routes>
      </Router>
    </Provider>
  );
}

export default App;
