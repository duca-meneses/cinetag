import FavoriteProvider from "Context/Favorites";
import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

function PageBase() {
    return(
        <main>
            <Header />
            <FavoriteProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoriteProvider>
            <Footer />
        </main>
    );
}

export default PageBase;