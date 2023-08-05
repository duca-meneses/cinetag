import FavoriteProvider from "Context/Favorites";
import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import Favorites from "pages/Favorites";
import Start from "pages/Start";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoriteProvider>
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/favoritos" element={<Favorites />}></Route>
          </Routes>
        </FavoriteProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
