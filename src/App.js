import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import WatchLater from "./pages/watchLater/watchLater"
import Playlist from "./pages/playlist/playlist"
import PlaylistVideo from "./pages/playlistVideo/playlistVideo"
import SingleVideo from "./pages/singleVideo/singleVideo"


function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/:playlistId" element={<PlaylistVideo />} />
        <Route path="/watch/:videoId" element={<SingleVideo />} />


      </Routes>
    </div>
  );
}

export default App;