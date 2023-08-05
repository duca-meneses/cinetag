import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import styles from "./Start.module.css";
import { useEffect, useState } from "react";

function Start() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/duca-meneses/cinetag-api/videos")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);
  return (
    <>
      <Banner imagem="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}

export default Start;
