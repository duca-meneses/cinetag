import Banner from "components/Banner";
import styles from "./Favorites.module.css";
import Title from "components/Title";
import Card from "components/Card";
import { useFavoriteContext } from "Context/Favorites";

function Favorites() {
  const { favorite } = useFavoriteContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Title>
        <h1> Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favorites;
