import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatScreen from "./lib/chat/chat_screen";
import Header from "./lib/header/header";
import HomePageScreen from "./lib/home/home_page_screen";

function App() {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-6 place-content-center place-items-center flex-grow relative max-lg:px-5 max-lg:py-8 max-lg:gap-4">
        <div className="bg-layer bg-layer-1" />
        <div className="bg-layer bg-layer-4" />
        <div className="bg-layer bg-layer-5" />
        <div className="bg-layer bg-layer-2" />
        <div className="bg-layer bg-layer-3" />
        <Routes>
          <Route path="/:slug?" element={<HomePageScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
