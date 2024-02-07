import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";
import Rockets from "./Rockets";
import Missions from "./Missions";
import { fetchRockets, fetchMissions } from "./actions";
import "./App.css";
import NavBar from "./NavBar";
import MyStatus from "./mypage";
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  useEffect(() => {
    store.dispatch(fetchRockets());
    store.dispatch(fetchMissions());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/mypage" element={<MyStatus />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
