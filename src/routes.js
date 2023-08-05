import Favorites from "pages/Favorites";
import Notfound from "pages/Notfound";
import PageBase from "pages/PageBase";
import Player from "pages/Player";
import Start from "pages/Start";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Start />}></Route>
          <Route path="favoritos" element={<Favorites />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
