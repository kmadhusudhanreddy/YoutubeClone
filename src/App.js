import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./context/AuthProvider";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Loading from "./Loader/Loading";
import Home from "./components/Home";
import Search from "./components/Search";
import Playingvideo from "./components/Playingvideo";
function App() {
  let { loading, data } = useAuth();

  return (
    <div className="App overflow-hidden ">
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/search/:searchQuery" element={<Search />}></Route>
        <Route path="/video/:id" element={<Playingvideo />}></Route>
      </Routes>
    </div>
  );
}
export default App;
