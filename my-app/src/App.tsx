import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatScreen from "./lib/chat/chat_screen";
import Header from "./lib/header/header";
import HomePageScreen from "./lib/home/home_page_screen";

function App() {
  return (
    <>
      <Header  />
      <section id="center">
        <div className="bg-layer bg-layer-1" />
        <div className="bg-layer bg-layer-4" />
        <div className="bg-layer bg-layer-5" />
        <div className="bg-layer bg-layer-2" />
        <div className="bg-layer bg-layer-3" />
        {/* {renderScreen()} */}
        <Routes>
          <Route path="/" element={<HomePageScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
          {/* thêm route khác ở đây */}
        </Routes>
      </section>
    </>
  );
}

export default App;
