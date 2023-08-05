import { useFavoriteContext } from "Context/Favorites";
import styles from "./Card.module.css";
import iconFavorite from "./favorite_outline.png";
import iconDisfavor from "./favorite.png";
import { Link } from "react-router-dom";

function Card({ id, titulo, capa }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = !isFavorite ? iconFavorite : iconDisfavor;
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img
        src={icon}
        alt="Favoritar Filme"
        className={styles.favorite}
        onClick={() => {
          addFavorite({ id, titulo, capa });
        }}
      />
    </div>
  );
}

export default Card;
