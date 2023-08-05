import Banner from "components/Banner";
import styles from "./Player.module.css";
import Title from "components/Title";
import { useParams } from "react-router-dom";
import Notfound from "pages/Notfound";
import { useEffect, useState } from "react";

function Player() {
  const [video, setVideo] = useState();
  const params = useParams();
  // const video = videos.find((video) => {
  //   return video.id === Number(params.id);
  // });
  useEffect(() =>{
    fetch(`https://my-json-server.typicode.com/duca-meneses/cinetag-api/videos?id=${params.id}`)
    .then(response => response.json())
    .then(data => {
        setVideo(...data)
    })  
  },) //tirei o array [] depois da virgula desta linha código original tinha este array
  if (!video) {
    return <Notfound />
  }

  return (
    <>
      <Banner imagem="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

export default Player;
