import { Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
// import Navbar from "./components/Navbar";
// import Feed from "./components/Feed";
// import VideoDetail from "./components/VideoDetail";
// import ChannelDetail from "./components/ChannelDetail";
// import SearchFeed from "./components/SearchFeed";

function App() {
  return(
  <>
  <Box sx={{ background: "#000" }}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
   </Box>
  </>
  )
  // return <>test</>
}

export default App;
